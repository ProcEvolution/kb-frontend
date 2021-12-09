import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  items: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'File',
        icon: 'pi pi-fw pi-file',
        routerLink: '/wizard',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus'
          }
        ]
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'Wearable Category',
            icon: 'pi pi-fw pi-align-left',
            routerLink: 'editor/wearablecategory'
          },
          {
            label: 'Wearable',
            icon: 'pi pi-fw pi-align-left',
            routerLink: 'editor/wearable'
          }
        ]
      }
    ];
  }
}
