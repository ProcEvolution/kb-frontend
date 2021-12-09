import { Component, OnInit } from '@angular/core';
import {MenuItem, MessageService} from 'primeng/api';
import { Activity } from '../interfaces/activity';
import { Process } from '../interfaces/process';
import { ProcessCategory } from '../interfaces/process-category';

@Component({
  selector: 'app-processes',
  templateUrl: './processes.component.html',
  styleUrls: ['./processes.component.css'],
  providers: [MessageService]
})
export class ProcessesComponent implements OnInit {


  items: MenuItem[];
  activeIndex: number;

  selectedProcessCategory: ProcessCategory;
  selectedProcess: Process;
  selectedProcessActivities: Activity[];


  constructor(private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.activeIndex = 0;
    this.items = [
      {
        label: 'Kategorien',
        command: (event => {
          this.activeIndex = 0;
          this.messageService.add({severity: 'info', summary: 'First Step', detail: event.item.label});
        })
      },
      {
        label: 'Prozesse',
        command: (event => {
          this.activeIndex = 1;
          this.messageService.add({severity: 'info', summary: 'First Step', detail: event.item.label});
        })},
      {label: 'Aktivitäten',
        command: (event => {
          this.activeIndex = 2;
          this.messageService.add({severity: 'info', summary: 'First Step', detail: event.item.label});
        })},
      {label: 'Ergebnis',
        command: (event => {
          this.activeIndex = 3;
          this.messageService.add({severity: 'info', summary: 'First Step', detail: event.item.label});
        })},
    ];


  }
}
