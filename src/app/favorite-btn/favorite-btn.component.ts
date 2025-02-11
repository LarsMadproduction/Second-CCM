import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-favorite-btn',
  imports: [],
  templateUrl: './favorite-btn.component.html',
  styleUrl: './favorite-btn.component.scss'
})
export class FavoriteBtnComponent {
  @Input() imageIndex!: number;

  share() {
    console.log(`Bild ${this.imageIndex} wurde geteilt!`);
    alert(`Bild ${this.imageIndex} wurde geteilt!`);
  }
}
