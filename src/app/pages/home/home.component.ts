import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @ViewChild('videoElement') videoElement!: ElementRef<HTMLVideoElement>;
  showPlayButton = true;

  playVideo(): void {
    const video = this.videoElement.nativeElement;

    video.play()
      .then(() => {
        console.log('Vídeo reproduzido com sucesso');
      })
      .catch(err => {
        console.error('Erro ao reproduzir o vídeo:', err);
      });
  }
}
