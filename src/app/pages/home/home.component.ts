import { AfterViewChecked, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewChecked  {
  @ViewChild('videoElement') videoElement!: ElementRef<HTMLVideoElement>;
  @ViewChild('interactiveLayer') interactiveLayer!: ElementRef<HTMLDivElement>;

  showPlayButton = true;

  ngAfterViewChecked(): void {
    // Agora você pode acessar o ViewChild depois que a visualização foi inicializada
    if (this.videoElement && this.interactiveLayer) {
      // Apenas exibe uma mensagem caso os elementos existam
      console.log('Video element and interactive layer are available');
    }
  }

  playVideo(): void {
    const video = this.videoElement.nativeElement;
    const layer = this.interactiveLayer.nativeElement;

    video.muted = false;

    video.play()
      .then(() => {
        this.showPlayButton = false; // Esconde o botão de play
        layer.style.pointerEvents = 'all'; // Habilita a interação nos links
      })
      .catch(err => {
        console.error('Erro ao reproduzir o vídeo:', err);
      });
  }
}
