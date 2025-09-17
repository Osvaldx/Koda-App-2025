import { Injectable } from '@angular/core';
import { createClient, SupabaseClient, User } from '@supabase/supabase-js';
import { environment as env } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private currentUser: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  public user$ = this.currentUser.asObservable();

  private supabase: SupabaseClient = createClient(env.supabase.API_URL, env.supabase.API_KEY);

  constructor() {
    this.supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        this.currentUser.next(session.user);
      } else {
        this.currentUser.next(null);
      }
    });
  }

  public async signIn(email: string, password: string) {
    const resp = await this.supabase.auth.signInWithPassword({ email, password });

    if (resp.data.user) {
      this.currentUser.next(resp.data.user);
    }

    return resp;
  }

  public signOut() {
    this.resetUser();
    return this.supabase.auth.signOut();
  }

  public async signUp({
    email,
    password,
    userMetadata,
  }: {
    email: string;
    password: string;
    userMetadata: { name: string; lastName: string; identification: string; image?: File | null };
  }) {
    const payload = {
      email,
      password,
    };

    const { data, error } = await this.supabase.auth.signUp(payload);
    if (error) {
      throw error;
    }
    if (data.user) {
      try {
        const { error: insertError } = await this.supabase.from('users').insert([
          {
            user_id: data.user.id,
            first_name: userMetadata.name,
            last_name: userMetadata.lastName,
            dni: userMetadata.identification,
          },
        ]);
        if (insertError) {
          await this.supabase.auth.admin.deleteUser(data.user.id);
          throw insertError;
        }
        if (userMetadata.image) {
          await this.upsertUserPhoto(userMetadata.image);
        }
      } catch (e) {
        console.error('Error al insertar usuario:', e);
        throw e;
      }
    }

    return { data, error };
  }

  public async upsertUserPhoto(file: File): Promise<{ path: string; publicUrl?: string | null }> {
    let user = this.currentUser.value;
    if (!user) {
      const { data, error } = await this.supabase.auth.getUser();
      if (data?.user === null) {
        throw error ?? new Error('No authenticated user');
      }
      user = data.user;
    }

    const { data: profile, error: profileError } = await this.supabase
      .from('users')
      .select('avatar_path')
      .eq('user_id', user.id)
      .single();
    if (profileError) throw profileError;

    const previousPath: string | null = profile?.avatar_path ?? null;

    const newPath = `${user.id}/${file.name}`;

    const path = previousPath ? previousPath : newPath;
    const { data } = await this.supabase.storage
      .from('koda-avatars')
      .upload(path, file, { upsert: true });
    if (!data) {
      throw new Error('Error al subir la foto');
    }

    const { data: updatedUser, error } = await this.supabase
      .from('users')
      .update({ avatar_path: path })
      .eq('user_id', user.id);

    if (error) throw error;

    return data;
  }

  public resetUser(): void {
    this.currentUser.next(null);
  }
}
