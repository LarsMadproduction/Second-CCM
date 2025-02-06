import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-share-btn',
  standalone: true,
  templateUrl: './share-btn.component.html',
  styleUrls: ['./share-btn.component.scss']
})
export class ShareBtnComponent {
  @Input() imageIndex!: number;

  share() {
    console.log(`Bild ${this.imageIndex} wurde geteilt!`);
    alert(`Bild ${this.imageIndex} wurde geteilt!`);
  }
}
