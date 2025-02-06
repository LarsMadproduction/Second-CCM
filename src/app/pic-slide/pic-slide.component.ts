import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pic-slide',
  imports: [CommonModule],
  templateUrl: './pic-slide.component.html',
  styleUrl: './pic-slide.component.scss',
})
export class PicSlideComponent {
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
