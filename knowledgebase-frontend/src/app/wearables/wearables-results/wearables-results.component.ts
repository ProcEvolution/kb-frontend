import {Component, Input, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Wearable} from '../../interfaces/wearable';
import {ResultService} from '../../services/result.service';
import {SupportedWearable} from '../../interfaces/supported-wearable';
import {SupportedActivity} from '../../interfaces/supported-activity';
import {Process} from '../../interfaces/process';

@Component({
  selector: 'app-wearables-results',
  templateUrl: './wearables-results.component.html',
  styleUrls: ['./wearables-results.component.css']
})
export class WearablesResultsComponent implements OnInit {

  activityResult: SupportedActivity[];

  resultObs: Observable<SupportedActivity[]>;
  processes: Array<any>;

  @Input()
  wearable: Wearable;

  constructor(private wearableResultService: ResultService) { }

  ngOnInit(): void {
    this.wearableResultService.getResultWearable([this.wearable.id]).subscribe(value => {
      console.log('wearable result');
      console.log(value);
      this.activityResult = value.supportedActivity;
      this.resultObs = of(value.supportedActivity);

      this.processes = [];
      this.activityResult.forEach((sup) => {
        if (!(this.processes.filter((p) => p.process.id === sup.process.id).length > 0)){
          const x = {
            process: sup.process,
            rating: sup.rating,
            activities: []
          };
          this.processes.push(x);
        }
        const process = this.processes.find((p) => p.process.id === sup.process.id);
        process.activities.push(sup.activity);
      });
      console.warn(this.processes);
    });
  }

}
