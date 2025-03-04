import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, style, transition, animate } from '@angular/animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.6s ease-in', style({ opacity: 1 })),
      ]),
    ]),
  ]
})
export class AboutComponent {
  isOpen = false;

  educationList = [
    {
      degree: "Master of Science in Information Systems",
      institution: "Northeastern University, Boston, MA",
      logo: "./assets/Education /NEU.png", 
      cgpa: "3.8/4.0",
      description: [
        "Data Management and Database Design",
        "Application Engineering and Development",
        "Program Structures and Algorithms",
        "Web Design and User Experience",
      ]
    },
    {
      degree: "Bachelor of Technology in Computer Science & Engineering",
      institution: "Sri Venkateswara Engineering College for Women, India",
      logo: "./assets/Education /SVEW.png", 
      cgpa: "7.89/10.0",
      description: [
        "Discrete Mathematics",
        "Principles of Programming Languages",
        "Database Management Systems",
        "Object Oriented Programming",
        "AI & ML",
        "Cloud computing"
      ]
    }
  ];

  toggleAccordion(): void {
    this.isOpen = !this.isOpen;
  }
}
