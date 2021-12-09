import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {Wearable} from '../../interfaces/wearable';
import {WearableCategory} from '../../interfaces/wearable-category';
import {WearableCategoryService} from '../../services/wearable-category.service';

@Component({
  selector: 'app-wearables-categories',
  templateUrl: './wearables-categories.component.html',
  styleUrls: ['./wearables-categories.component.css']
})
export class WearablesCategoriesComponent implements OnInit {

  categoriesObs: Observable<WearableCategory[]>;
  constructor(private wearableCategoryService: WearableCategoryService) { }

  @Input()
  selectedWearableCategory: WearableCategory;
  @Output()
  selectedWearableCategoryChange = new EventEmitter<WearableCategory>();

  @Input()
  activeIndex: number;
  @Output()
  activeIndexChange = new EventEmitter<number>();

  ngOnInit(): void {
    this.categoriesObs = this.wearableCategoryService.findAll();
  }

  selectCategory(category: WearableCategory): void {
    this.selectedWearableCategory = category;
    this.selectedWearableCategoryChange.emit(this.selectedWearableCategory);
    this.activeIndex++;
    this.activeIndexChange.emit(this.activeIndex);
  }
}
