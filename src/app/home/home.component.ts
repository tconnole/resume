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
      color: '#ba392b'
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
      color: '#dec133'
    });

    // CSS
    this.fSkills.push({
      label: 'CSS / HTML',
      skillLevel: '95%',
      skillDesc: '',
      color: '#6a269e'
    });
  }

  public generateBackEndSkills() {
    // Add java
    this.bSkills.push({
      label: 'Java',
      skillLevel: '70%',
      skillDesc: '',
      color: '#cf215b'
    });

    // Add java
    this.bSkills.push({
      label: 'SQL',
      skillLevel: '40%',
      skillDesc: '',
      color: '#316b36'
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
      color: '#9e3416'
    });

    this.otherSkills.push({
      label: 'Cypress / Selenium',
      skillLevel: '75%',
      skillDesc: '',
      color: '#1e7575'
    });
  }
}
