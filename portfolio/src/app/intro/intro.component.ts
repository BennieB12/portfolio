import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})
export class IntroComponent {
  private imageMap: { [key: string]: string[] } = {
    location: ['../../assets/img/location.png', '../../assets/img/location-hover.png'],
    remote: ['../../assets/img/remote.png', '../../assets/img/remote-hover.png'],
    move: ['../../assets/img/move.png', '../../assets/img/move-hover.png']
  };

  introChangeImg(event: Event, hover: boolean) {
    const targetElement = event.currentTarget as HTMLElement;
    const imgElement = targetElement.querySelector('img');
    if (!imgElement) return;

    const imgId = imgElement.id;
    if (this.imageMap[imgId]) {
      imgElement.src = hover ? this.imageMap[imgId][1] : this.imageMap[imgId][0];
    }
  }
}


