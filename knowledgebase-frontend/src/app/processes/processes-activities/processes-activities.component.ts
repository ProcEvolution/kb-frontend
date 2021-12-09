import {Component, EventEmitter, Input, OnInit, Output, Pipe, PipeTransform} from '@angular/core';
import {ActivityService} from '../../services/activity.service';
import {Observable} from 'rxjs';
import {Activity} from '../../interfaces/activity';
import {Process} from '../../interfaces/process';

@Component({
  selector: 'app-processes-activities',
  templateUrl: './processes-activities.component.html',
  styleUrls: ['./processes-activities.component.css']
})
export class ProcessesActivitiesComponent implements OnInit {
  activities: Activity[] = [];

  //@Input()
  selectedActivities: Activity[] = [];

  @Output()
  selectedActivitiesChange = new EventEmitter<Activity[]>();


  @Input()
  process: Process;

  activitiesObs: Observable<Activity[]>;


  @Input()
  activeIndex: number;
  @Output()
  activeIndexChange = new EventEmitter<number>();

  constructor(private activityService: ActivityService) { }

  ngOnInit(): void {
    console.log('selectedActivities');
    console.dir(this.selectedActivities);
    this.activitiesObs = this.activityService.findAll();
  }

   moveToTarget(): void {
     this.selectedActivitiesChange.emit(this.selectedActivities);
   }

  goToResult(): void {
    this.activeIndex++;
    this.activeIndexChange.emit(this.activeIndex);
  }

  moveAllToTarget(): void {
    this.selectedActivitiesChange.emit(this.selectedActivities);
  }
}

@Pipe({name: 'filterOnProcessId'})
export class FilterOnProcessIdPipe implements PipeTransform {
  transform(list: Activity[], process: Process): Activity[] {
    const result: Activity[] = [];
    list.forEach(activity => {
      process.activities.forEach(pActivity => {
        if (pActivity.id === activity.id) {
          result.push(activity);
        }
      });
    });
    return result;
  }
}

