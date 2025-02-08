import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('starsContainer', { static: true }) starsContainer!: ElementRef;

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
    this.generateStars();
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

  generateStars() {
    const starCount = 100;
    for (let i = 0; i < starCount; i++) {
      const star = this.renderer.createElement('div');
      this.renderer.addClass(star, 'star');
      this.renderer.setStyle(star, 'top', `${Math.random() * 100}vh`);
      this.renderer.setStyle(star, 'left', `${Math.random() * 100}vw`);
      this.renderer.setStyle(star, 'animationDuration', `${Math.random() * 2 + 1}s`);
      this.renderer.appendChild(this.starsContainer.nativeElement, star);
    }
  }
}
