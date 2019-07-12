
import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements AfterViewInit {
  public album: Image[] = [
    new Image('https://www.event.lk/assets/img/events/67383604776705053356679403_2020015484970845_7642887981040140288_n.jpg'),
  ];

  constructor() { }

  ngAfterViewInit() {
  }
}

class Image {
  constructor(public src: string, public caption: string = "") { }
}

