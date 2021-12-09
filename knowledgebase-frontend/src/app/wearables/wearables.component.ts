import { Component, OnInit } from '@angular/core';
import {MenuItem, MessageService} from 'primeng/api';
import {WearableCategory} from '../interfaces/wearable-category';
import {Wearable} from '../interfaces/wearable';

@Component({
  selector: 'app-wearables',
  templateUrl: './wearables.component.html',
  styleUrls: ['./wearables.component.css'],
  providers: [MessageService]
})
export class WearablesComponent implements OnInit {



  items: MenuItem[];
  activeIndex: number;

  selectedWearableCategory: WearableCategory;
  selectedWearable: Wearable;

  constructor(private messageService: MessageService) { }

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
        label: 'Wearables',
        command: (event => {
          this.activeIndex = 1;
          this.messageService.add({severity: 'info', summary: 'First Step', detail: event.item.label});
        })},
      {
        label: 'Ergebnis',
        command: (event => {
          this.activeIndex = 2;
          this.messageService.add({severity: 'info', summary: 'First Step', detail: event.item.label});
        })},
    ];
  }

}
