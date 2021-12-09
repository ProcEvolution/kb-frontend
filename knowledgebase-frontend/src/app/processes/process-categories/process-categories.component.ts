import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Observable } from 'rxjs';
import { ProcessCategory } from 'src/app/interfaces/process-category';
import { ProcessCategoryService } from 'src/app/services/process-category.service';

@Component({
  selector: 'app-process-categories',
  templateUrl: './process-categories.component.html',
  styleUrls: ['./process-categories.component.css']
})
export class ProcessCategoriesComponent implements OnInit {

  constructor(private processCategoryService: ProcessCategoryService) { }

  categoriesObs: Observable<ProcessCategory[]>;

  @Input()
  selectedProcessCategory: ProcessCategory;
  @Output()
  selectedProcessCategoryChange = new EventEmitter<ProcessCategory>();

  @Input()
  activeIndex: number;
  @Output()
  activeIndexChange = new EventEmitter<number>();

  ngOnInit(): void {
    this.categoriesObs = this.processCategoryService.findAll();
  }

  selectProcessCategory(category: ProcessCategory): void {
    this.selectedProcessCategory = category;
    this.selectedProcessCategoryChange.emit(this.selectedProcessCategory);
    this.activeIndex++;
    this.activeIndexChange.emit(this.activeIndex);
  }
}
