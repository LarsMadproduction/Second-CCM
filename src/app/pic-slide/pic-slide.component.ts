import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ShareBtnComponent } from "../share-btn/share-btn.component";
import { FavoriteBtnComponent } from "../favorite-btn/favorite-btn.component";

@Component({
  selector: 'app-pic-slide',
  standalone: true,
  imports: [CommonModule, ShareBtnComponent, FavoriteBtnComponent],
  templateUrl: './pic-slide.component.html',
  styleUrl: './pic-slide.component.scss',
})
export class PicSlideComponent implements AfterViewInit {
  @ViewChild('sliderContainer') sliderContainer!: ElementRef;
  images = [
    '/secondCCM.png',
    '/secondCCM.png',
    '/secondCCM.png',
    '/secondCCM.png',
    '/secondCCM.png',
  ];
  currentIndex = 0;

  ngAfterViewInit(): void {
    this.sliderContainer.nativeElement.addEventListener(
      'scroll',
      this.onScroll.bind(this)
    );
  }

  onScroll(): void {
    const scrollPosition = this.sliderContainer.nativeElement.scrollTop;
    this.currentIndex = Math.round(scrollPosition / window.innerHeight);
  }
}
