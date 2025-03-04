import { Component, HostListener, OnInit } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { trigger, transition, style, animate, query, group } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ], { optional: true }),
        group([
          query(':enter', [
            style({ transform: 'translateX(100%)', opacity: 0 }),
            animate(
              '700ms cubic-bezier(0.25, 0.8, 0.25, 1)',
              style({ transform: 'translateX(0%)', opacity: 1 })
            )
          ], { optional: true }),
          query(':leave', [
            animate(
              '500ms cubic-bezier(0.25, 0.8, 0.25, 1)',
              style({ transform: 'translateX(-100%)', opacity: 0 })
            )
          ], { optional: true })
        ])
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  isMenuOpen: boolean = false;
  isScrolled: boolean = false;
  customCursor!: HTMLElement;

  // Add a property to track the last spawn time
  private lastEmojiSpawnTime: number = 0;

  constructor(public router: Router) {
    // Close nav on navigation end
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.closeMenu();
      }
    });
  }

  ngOnInit() {
    // Get the custom cursor element once the view is initialized
    this.customCursor = document.querySelector('.custom-cursor') as HTMLElement;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  scrollToContact() {
    this.router.navigate(['/contactForm']).then(() => {
      setTimeout(() => {
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 1000);
    });
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 100;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.navbar') && !target.closest('.hamburger')) {
      this.closeMenu();
    }
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    // Update custom cursor position
    if (this.customCursor) {
      this.customCursor.style.top = `${event.clientY}px`;
      this.customCursor.style.left = `${event.clientX}px`;
    }

    // Throttle emoji spawning
    const now = Date.now();
    const threshold = 100; // in milliseconds
    if (now - this.lastEmojiSpawnTime > threshold) {
      this.spawnEmojiTrail(event.clientX, event.clientY);
      this.lastEmojiSpawnTime = now;
    }
  }

  spawnEmojiTrail(x: number, y: number) {
    // List of emojis to choose from
    const emojis = ['💜', '🍓', '🌺', '💜', '🍒', '🎈'];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

    const emoji = document.createElement('span');
    emoji.classList.add('emoji-trail');
    emoji.innerText = randomEmoji;

    // Position the element at the cursor position
    emoji.style.position = 'fixed';
    emoji.style.left = `${x}px`;
    emoji.style.top = `${y}px`;
    emoji.style.pointerEvents = 'none';

    // Append to the document
    document.body.appendChild(emoji);

    // Remove the emoji after the animation finishes (1 second)
    setTimeout(() => {
      emoji.remove();
    }, 1000);
  }
}
