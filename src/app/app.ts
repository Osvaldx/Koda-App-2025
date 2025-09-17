import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomToast } from './components/custom-toast/custom-toast';
import { SplashScreen } from "@capacitor/splash-screen"

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CustomToast],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
