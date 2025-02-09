import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
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
}
