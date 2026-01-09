import { Component, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  @Output() titleChange = new EventEmitter<string>();

  setTitle(title: string) {
    this.titleChange.emit(title);
  }
}
