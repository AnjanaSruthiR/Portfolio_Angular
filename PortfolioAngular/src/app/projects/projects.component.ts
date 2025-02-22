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
      description: 'Developed a dynamic portfolio website using Angular to showcase academic projects and technical expertise. Implemented engaging interactive animations and responsive design to enhance user experience.',
      image: './assets/Projects/Portfolio_Project.png',
      technologies: ['AngularJS', 'SCSS', 'HTML5', 'Typescript'],
      githubLink: 'https://github.com/AnjanaSruthiR/Portfolio_Angular'
    },
    {
      title: 'Patient Management Application',
      description: 'Built a responsive patient portal with React, Vite, and Tailwind CSS; integrated MongoDB and Okta IAM for secure data management and enhanced patient engagement',
      image: './assets/Projects/Patient_Management.png',
      technologies: ['React+vite', 'TailwindCSS', 'Node.js', 'MongoDb', 'Okta', 'IAM'],
      githubLink: 'https://github.com/AnjanaSruthiR/Patient_Management_Dashboards'
    },
    {
      title: 'Online Medical Management System',
      description: 'Developed a comprehensive hospital management application using Java Swing, leveraging core engineering and design principles while integrating real-time data management.',
      image: './assets/Projects/Hospital_Management.png',
      technologies: ['JavaSwing', 'Java', 'MySql'],
      githubLink: 'https://github.com/AnjanaSruthiR/Online_Medical_Management_System'
    },
    {
      title: 'Contact Form',
      description: 'An interactive contact form on my portfolio website enables visitor connections. Built with Node.js and Express, it was tested via Postman to ensure reliable communication.',
      image: './assets/Projects/Contact_Form.png',
      technologies: ['Node.js', 'express', 'Postman'],
      githubLink: 'https://github.com/AnjanaSruthiR/Portfolio_Angular/tree/main/PortfolioAngular/contact-form-backend'
    },
    {
      title: 'Car Rental System',
      description: 'Developed a robust relational database managing vehicles, customers, bookings, payments, and maintenance schedules, featuring an intuitive GUI and real-time PowerBI analytics.',
      image: './assets/Projects/Car_Rental_System.png',
      technologies: ['MySQL', 'Docker', 'Java (Swing for GUI)', 'Power BI'],
      githubLink: 'https://github.com/AnjanaSruthiR/Car-Rental-System---Database-Management'
    }
  ];
}
