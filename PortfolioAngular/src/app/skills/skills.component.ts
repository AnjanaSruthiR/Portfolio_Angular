import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills = [
    {
      name: 'Programming Languages',
      items: [
        { name: 'JavaScript', icon: 'javascript-plain' },
        { name: 'Typescript', icon: 'typescript-plain' },
        { name: 'Java', icon: 'java-plain' }
      ]
    },
    {
      name: 'Frontend Development',
      items: [
        { name: 'AngularJS', icon: 'angularjs-plain' },
        { name: 'ReactJS', icon: 'react-plain' },
        { name: 'HTML5', icon: 'html5-plain' },
        { name: 'CSS3', icon: 'css3-plain' },
        { name: 'SASS', icon: 'sass-original' },
        { name: 'Bootstrap', icon: 'bootstrap-plain' }
      ]
    },
    {
      name: 'Backend Development',
      items: [
        { name: 'Node.js', icon: 'nodejs-plain' },
        { name: 'ExpressJS', icon: 'express-original' }
      ]
    },
    {
      name: 'Databases',
      items: [
        { name: 'MongoDB', icon: 'mongodb-plain' },
        { name: 'MySQL', icon: 'mysql-plain' }
      ]
    },
    {
      name: 'Tools & Platforms',
      items: [
        { name: 'Figma', icon: 'figma-plain' },
        { name: 'Jira', icon: 'jira-plain' },
        { name: 'ServiceNow (SNOW)', icon: './assets/Skills/ServiceNow.png' },
        { name: 'Docker', icon: 'docker-plain' },
        { name: 'Power BI', icon: 'assets/Skills/Power_BI.svg' },
        { name: 'NetBeans', icon: 'assets/Skills/NetBeans.svg.png' },
        { name: 'Azure Data Studio', icon: 'assets/Skills/azure-data-studio.png' },
        { name: 'VS Code', icon: 'assets/Skills/Visual_Studio_Code.svg.webp' },
        { name: 'Android Studio', icon: 'androidstudio-plain' },
        { name: 'MS Excel', icon: 'assets/Skills/Microsoft_Office_Excel.svg.webp' },
        { name: 'GitHub', icon: 'github-original' },
        { name: 'Bitbucket', icon: 'bitbucket-original' },
        { name: 'O365', icon: 'assets/Skills/Microsoft_365.svg.png' }
      ]
    }
  ];
}
