import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ConfirmationService, MessageService} from 'primeng/api';
import {Process} from '../../../interfaces/process';
import {ProcessService} from '../../../services/process.service';
import {ProcessCategory} from '../../../interfaces/process-category';
import {ProcessCategoryService} from '../../../services/process-category.service';
import {Activity} from '../../../interfaces/activity';
import {ActivityService} from '../../../services/activity.service';

@Component({
    selector: 'app-process',
    templateUrl: './process.component.html',
    styleUrls: ['./process.component.css']
})
export class ProcessComponent implements OnInit {

    processes: Process[];
    selectedProcess = [];
    processDialog = false;
    process: Process;
    submitted = false;

    isEditable = false;
    processFormGroup: FormGroup;


    processCategories: ProcessCategory[];
    processCategorySelection: ProcessCategory[];


    activities: Activity[];
    activitySelection: Activity[];

    constructor(private processService: ProcessService,
                private processCategoryService: ProcessCategoryService,
                private formBuilder: FormBuilder,
                private messageService: MessageService,
                private confirmationService: ConfirmationService,
                private activityService: ActivityService) {

        this.processFormGroup = formBuilder.group({
            name: [''],
        });
    }

    ngOnInit(): void {
        this.processService.findAll().subscribe(value => this.processes = value);
        this.processCategoryService.findAll().subscribe(value => this.processCategories = value);
        this.activityService.findAll().subscribe(value => this.activities = value);
    }

    openNew(): void {
        this.processDialog = true;
        console.dir(this.selectedProcess);
    }

    deleteSelectedProducts(): void {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected products?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.processService.deleteAll(this.selectedProcess.map(value => value.id)).subscribe(() => {
                    this.processes = this.processes.filter(val => !this.selectedProcess.includes(val));
                    this.selectedProcess = null;
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'Products Deleted',
                        life: 3000
                    });
                });
            }
        });
    }

    editProcess(process: Process): void {
        this.process = {...process};
        console.dir(this.process);
        this.setForm(process);
        this.isEditable = true;
        this.processDialog = true;
    }

    deleteProcess(process: Process): void {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + process.name + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.processService.deleteAll([process.id]).subscribe(value => {
                    this.processes = this.processes.filter(val => val.id !== process.id);
                    this.process = {};
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'Product Deleted',
                        life: 3000
                    });
                });
            }
        });
    }


    hideDialog(): void {
        this.submitted = false;
        this.process = {};
        this.processDialog = false;
        this.isEditable = false;
        this.clearForm();
    }

    setForm(process: Process): void {
        this.processFormGroup.get('name').setValue(process.name);
        this.processCategorySelection = process.processCategory;
        this.activitySelection = process.activities;
    }

    clearForm(): void {
        this.processFormGroup.get('name').setValue('');
        this.processCategorySelection = [];
        this.activitySelection = [];
    }

    saveProduct(): void {
        console.log('save process');
        console.dir(this.activitySelection);
        const processTemp: Process = {
            name: this.processFormGroup.get('name').value,
            processCategory: this.processCategorySelection !== null && this.processCategorySelection !== undefined
                ? this.processCategorySelection : null,
            activities: this.activitySelection !== null && this.activitySelection !== undefined
                ? this.activitySelection : null
        };
        this.submitted = true;
        if (this.isEditable) {
            processTemp.id = this.process.id;
            processTemp.processCategory = this.processCategorySelection;
            processTemp.activities = this.activitySelection;
        }
        this.processService.save(processTemp).subscribe(value => {
            this.isEditable = false;
            this.messageService.add({
                severity: 'success',
                summary: 'Successful',
                detail: 'Process Created',
                life: 3000
            });
            window.location.reload();
        });
        this.hideDialog();
    }
}
