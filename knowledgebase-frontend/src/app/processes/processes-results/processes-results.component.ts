import {Component, Input, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Activity} from '../../interfaces/activity';
import {ResultService} from '../../services/result.service';
import {SupportedWearable} from '../../interfaces/supported-wearable';

@Component({
    selector: 'app-processes-results',
    templateUrl: './processes-results.component.html',
    styleUrls: ['./processes-results.component.css']
})
export class ProcessesResultsComponent implements OnInit {
    processResults: SupportedWearable[];

    resultObs: Observable<SupportedWearable[]>;

    test: any[];

    @Input()
    activities: Activity[];

    constructor(private resultService: ResultService) {
    }

    ngOnInit(): void {
        this.resultService.getResult(this.activities.map(value => value.id))
            .subscribe(value => {
                console.log('supported wearabes');
                this.processResults = value.supportedWearables;
                console.dir(this.processResults);
                this.resultObs = of(value.supportedWearables);
            });

    }

}
