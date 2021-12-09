import {Component, Input, OnInit, Output, EventEmitter, PipeTransform, Pipe} from '@angular/core';
import {Process} from 'src/app/interfaces/process';
import {ProcessCategory} from 'src/app/interfaces/process-category';
import {ProcessService} from '../../services/process.service';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-processes-overview',
    templateUrl: './processes-overview.component.html',
    styleUrls: ['./processes-overview.component.css']
})
export class ProcessesOverviewComponent implements OnInit {

    @Input()
    processCategory: ProcessCategory;


    processObs: Observable<Process[]>;
    @Input()
    selectedProcess: Process;
    @Output()
    selectedProcessChange = new EventEmitter<Process>();

    @Input()
    activeIndex: number;
    @Output()
    activeIndexChange = new EventEmitter<number>();

    constructor(private processService: ProcessService) {
    }

    ngOnInit(): void {
        this.processObs = this.processService.findAll();
        this.processService.findAll().subscribe(value => {
            console.dir(value);
        });
    }

    selectProcess(p: Process): void {
        this.selectedProcess = p;
        this.selectedProcessChange.emit(this.selectedProcess);
        this.activeIndex++;
        this.activeIndexChange.emit(this.activeIndex);
    }
}

@Pipe({name: 'filterOnCategoryId'})
export class FilterOnCategoryIdPipe implements PipeTransform {
    transform(list: Process[], category: ProcessCategory): Process[] {
        // return list.filter(item => item.processCategory.id === category.id);
        const result: Process[] = [];
        list.forEach(process => {
            process.processCategory.forEach(processCategory => {
                if (processCategory.id === category.id) {
                    result.push(process);
                }
            });
        });
        return result;
    }
}
