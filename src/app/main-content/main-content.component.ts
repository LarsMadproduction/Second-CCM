import { Component } from '@angular/core';
import { PicSlideComponent } from "../pic-slide/pic-slide.component";
import { ShareBtnComponent } from "../share-btn/share-btn.component";

@Component({
  selector: 'app-main-content',
  imports: [PicSlideComponent, ShareBtnComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
