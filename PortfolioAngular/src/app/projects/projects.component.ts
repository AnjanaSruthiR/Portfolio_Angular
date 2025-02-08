import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website built with AngularJS, SCSS and Typescript.',
      image: '/assets/Projects/Portfolio_Home.png',
      technologies: ['AngularJS', 'SCSS', 'HTML5', 'Typescript'],
      githubLink: 'https://github.com/AnjanaSruthiR/Portfolio_Angular_Project'
    },
    {
      title: 'Car Rental System App',
      description: 'An Car Rental application with a smooth user experience and secure checkout integrated with real time database',
      image: 'assets/images/ecommerce.png',
      technologies: ['React', 'CSS', 'Firebase', 'MySql'],
      githubLink: 'https://github.com/yourusername/portfolio-website'
    },
    {
      title: 'Contact Form',
      description: 'A Form for contacting and connecting withpeople through my portfolio website.',
      image: '/assets/Projects/Contact_Form.png',
      technologies: ['Vue', 'JavaScript', 'D3.js'],
      githubLink: 'https://github.com/yourusername/portfolio-website'
    }
  ];
}
