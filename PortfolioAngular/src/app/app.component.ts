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
  }
}
