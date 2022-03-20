import { Component, OnInit } from '@angular/core';
import { Skill } from '../skill-meter/skill-meter.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public fSkills: Skill[] = [];
  public bSkills: Skill[] = [];
  public otherSkills: Skill[] = [];
  constructor() { }

  ngOnInit(): void {
    this.generateFrontEndSkills();
    this.generateBackEndSkills();
    this.generateOtherSkills();
  }

  public generateFrontEndSkills() {
    // Add angular
    this.fSkills.push({
      label: 'Angular / NGRX',
      skillLevel: '95%',
      skillDesc: '',
      color: '#ff0000'
    });

    // Add Typescript
    this.fSkills.push({
      label: 'TypeScript / JavaScript',
      skillLevel: '90%',
      skillDesc: '',
      color: '#3178c6'
    });

    this.fSkills.push({
      label: 'Python',
      skillLevel: '75%',
      skillDesc: '',
      color: '#F8cb00'
    });

    // CSS
    this.fSkills.push({
      label: 'CSS / HTML',
      skillLevel: '95%',
      skillDesc: '', // 'I think I\'m pretty good at CSS, but you can always be better!',
      color: '#7800D3'
    });
  }

  public generateBackEndSkills() {
    // Add java
    this.bSkills.push({
      label: 'Java',
      skillLevel: '70%',
      skillDesc: '',
      color: '#C62e2e'
    });

    // Add java
    this.bSkills.push({
      label: 'SQL',
      skillLevel: '40%',
      skillDesc: '',
      color: '#008a0c'
    });
  }

  public generateOtherSkills() {
    this.otherSkills.push({
      label: 'GIT',
      skillLevel: '90%',
      skillDesc: '',
      color: '#4a3791'
    });

    this.otherSkills.push({
      label: 'Linux',
      skillLevel: '75%',
      skillDesc: '',
      color: '#A55000'
    });

    this.otherSkills.push({
      label: 'Cypress / Selenium',
      skillLevel: '75%',
      skillDesc: '',
      color: '#03a9fc'
    });
  }
}
