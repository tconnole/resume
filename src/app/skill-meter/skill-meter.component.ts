import { Component, Input, OnInit } from '@angular/core';
import { Skill } from './skill-meter.model';

@Component({
  selector: 'app-skill-meter',
  templateUrl: './skill-meter.component.html',
  styleUrls: ['./skill-meter.component.scss']
})

export class SkillMeterComponent implements OnInit {

  @Input() skill!: Skill;

  constructor() { }

  ngOnInit(): void {
  }
}
