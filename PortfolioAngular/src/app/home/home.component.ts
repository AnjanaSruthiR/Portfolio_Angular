import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  words = [
    'Software Developer',
    'Data Enthusiast',
    'Security Analyst',
    'Front-end Developer',
    'UI/UX Designer',
    'Solutions Architect'
  ];

  currentWord = '';
  wordIndex = 0;
  typingSpeed = 100;
  deletingSpeed = 100;
  isDeleting = false;

  constructor(private renderer: Renderer2) {}
  ngOnInit() {
    this.typeEffect();
  }

  typeEffect() {
    const current = this.words[this.wordIndex];
    if (this.isDeleting) {
      this.currentWord = current.substring(0, this.currentWord.length - 1);
    } else {
      this.currentWord = current.substring(0, this.currentWord.length + 1);
    }

    let delay = this.isDeleting ? this.deletingSpeed : this.typingSpeed;

    if (!this.isDeleting && this.currentWord === current) {
      delay = 1000;
      this.isDeleting = true;
    } else if (this.isDeleting && this.currentWord === '') {
      this.isDeleting = false;
      this.wordIndex = (this.wordIndex + 1) % this.words.length;
      delay = 500;
    }

    setTimeout(() => this.typeEffect(), delay);
  }

  @ViewChild('bgVideo') bgVideo!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {
    // Option 1: Try to auto-play after a slight delay
    setTimeout(() => {
      const video = this.bgVideo.nativeElement;
      video.muted = true; // ensure it's muted
      video.play().then(() => {
        console.log('Auto-play succeeded');
      }).catch(err => {
        console.error('Auto-play failed:', err);
        // Option 2: Add a one-time click listener to resume playback
        this.addUserInteractionFallback();
      });
    }, 100); // 100ms delay to allow view rendering
  }

  // Fallback: if auto-play fails, prompt for a click to start video
  private addUserInteractionFallback(): void {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.zIndex = '9999';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)'; // fully transparent
    overlay.style.cursor = 'pointer';
    overlay.addEventListener('click', () => {
      this.bgVideo.nativeElement.play().then(() => {
        console.log('Playback started after user interaction');
        document.body.removeChild(overlay);
      });
    });
    document.body.appendChild(overlay);
  }
}
