import { Component, OnInit } from '@angular/core';
import {RouterModule} from '@angular/router';
import {WearableCategoryService} from '../services/wearable-category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: RouterModule,
              private wearableCategoryService: WearableCategoryService) { }

  ngOnInit(): void {
    this.wearableCategoryService.findAll().subscribe(value => console.dir(value));
  }
}
