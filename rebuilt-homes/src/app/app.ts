import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = signal('');

  ngOnInit() {
    const path = window.location.pathname;
    this.title.set(path.charAt(1).toUpperCase() + path.slice(2));
  }

}
