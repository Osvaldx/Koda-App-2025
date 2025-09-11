import { Injectable } from '@angular/core';
import { createClient, SupabaseClient, User } from '@supabase/supabase-js'
import { environment as env } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class Auth {

  private currentUser: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  public user$ = this.currentUser.asObservable();
  
  private supabase: SupabaseClient = createClient(env.supabase.API_URL, env.supabase.API_KEY);

  public async signIn(email: string, password: string) {
    const resp = await this.supabase.auth.signInWithPassword({ email, password });

    if(resp.data.user) {
      this.currentUser.next(resp.data.user);
    }

    return resp;
  }

  public signOut() {
    return this.supabase.auth.signOut();
  }

}
