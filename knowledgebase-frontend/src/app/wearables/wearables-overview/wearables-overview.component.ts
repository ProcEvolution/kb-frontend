import {Component, EventEmitter, Input, OnInit, Output, Pipe, PipeTransform} from '@angular/core';
import {WearableCategory} from '../../interfaces/wearable-category';
import {WearableService} from '../../services/wearable.service';
import {Observable} from 'rxjs';
import {Wearable} from '../../interfaces/wearable';
import {Activity} from '../../interfaces/activity';
import {Process} from '../../interfaces/process';

@Component({
  selector: 'app-wearables-overview',
  templateUrl: './wearables-overview.component.html',
  styleUrls: ['./wearables-overview.component.css']
})
export class WearablesOverviewComponent implements OnInit {

  @Input()
  wearableCategory: WearableCategory;

  wearableObs: Observable<Wearable[]>;

  @Input()
  selectedWearable: Wearable;
  @Output()
  selectedWearableChange = new EventEmitter<Wearable>();

  @Input()
  activeIndex: number;
  @Output()
  activeIndexChange = new EventEmitter<number>();

  constructor(private wearableService: WearableService) { }

  ngOnInit(): void {
    console.log(this.wearableCategory);
    this.wearableObs = this.wearableService.findAll();
  }

  onClick(wearable: Wearable): void {
    this.selectedWearable = wearable;
    this.selectedWearableChange.emit(this.selectedWearable);
    this.activeIndex++;
    this.activeIndexChange.emit(this.activeIndex);
  }

}



@Pipe({name: 'filterOnWearableCategory'})
export class FilterOnWearableCategoryPipe implements PipeTransform {
  transform(list: Wearable[], category: WearableCategory): Activity[] {
    const result: Wearable[] = [];
    list.forEach(wearable => {
      console.log(wearable);
      wearable.wearableCategory.find(cat => {
        if (cat.id === category.id){
          result.push(wearable);
        }
      });
    });
    return result;
  }
}
