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
      description: 'Developed a dynamic portfolio website using Angular to showcase academic projects and technical expertise',
      image: './assets/Projects/Portfolio_Project.png',
      technologies: ['AngularJS', 'SCSS', 'HTML5', 'Typescript'],
      githubLink: 'https://github.com/AnjanaSruthiR/Portfolio_Angular_Project'
    },
    {
      title: 'Patient Management Application',
      description: 'Built a responsive patient portal with React, Vite, and Tailwind CSS; integrated MongoDB and Okta IAM for secure data management and enhanced patient engagement',
      image: './assets/Projects/Patient_Management.png',
      technologies: ['React+vite', 'TailwindCSS', 'Node.js', 'MongoDb', 'Okta', 'IAM'],
      githubLink: 'https://github.com/yourusername/portfolio-website'
    },
    {
      title: 'Hospital Management Application Development',
      description: 'Developed a comprehensive hospital management application using Java Swing, applying core application engineering and design principles along with real-time data management through MySQL',
      image: './assets/Projects/Hospital_Management.png',
      technologies: ['JavaSwing', 'Java', 'MySql'],
      githubLink: 'https://github.com/yourusername/portfolio-website'
    },
    {
      title: 'Contact Form',
      description: 'A Form for contacting and connecting with people through my portfolio website.',
      image: './assets/Projects/Contact_Form.png',
      technologies: ['Node.js', 'express', 'Postman'],
      githubLink: 'https://github.com/yourusername/portfolio-website'
    }
  ];
}
