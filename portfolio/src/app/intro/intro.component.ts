import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})
export class IntroComponent {

  private originalImages: { [key: string]: string } = {
    location: '../../assets/img/location.png',
    remote: '../../assets/img/remote.png',
    move: '../../assets/img/move.png'
  };

  private hoverImages: { [key: string]: string } = {
    location: '../../assets/img/location-hover.png',
    remote: '../../assets/img/remote-hover.png',
    move: '../../assets/img/move-hover.png'
  };

  introChangeImg(event: Event, isHover: boolean) {
    const imgElement = event.target as HTMLImageElement;
    if (!imgElement) return;

    const imgKey = Object.keys(this.originalImages).find(key => 
      imgElement.src.includes(this.originalImages[key].split('/').pop()!)
    );

    if (imgKey) {
      imgElement.src = isHover ? this.hoverImages[imgKey] : this.originalImages[imgKey];
    }
  }
}
