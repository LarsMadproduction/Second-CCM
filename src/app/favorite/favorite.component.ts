import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-favorite',
  imports: [CommonModule],
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.scss'
})
export class FavoriteComponent {
  images = [
    '/secondCCM.png',
    '/secondCCM.png',
    '/secondCCM.png',
    '/secondCCM.png',
    '/secondCCM.png',
  ];
  currentIndex = 0;

}
