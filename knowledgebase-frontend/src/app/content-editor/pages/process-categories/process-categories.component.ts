import {Component, OnInit} from '@angular/core';
import {WearableCategory} from '../../../interfaces/wearable-category';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ProcessCategory} from '../../../interfaces/process-category';
import {ProcessCategoryService} from '../../../services/process-category.service';

@Component({
    selector: 'app-process-categories',
    templateUrl: './process-categories.component.html',
    styleUrls: ['./process-categories.component.css']
})
export class ProcessCategoriesComponent implements OnInit {

    processCategories: ProcessCategory[];
    selectedProcessCategory = [];
    processCategoryDialog = false;
    processCategory: ProcessCategory;
    submitted = false;

    isEditable = false;

    processCategoryFormGroup: FormGroup;

    constructor(private processCategoryService: ProcessCategoryService,
                private formBuilder: FormBuilder,
                private messageService: MessageService,
                private confirmationService: ConfirmationService) {

        this.processCategoryFormGroup = formBuilder.group({
            name: [''],
        });
    }

    ngOnInit(): void {
        this.processCategoryService.findAll().subscribe(value => this.processCategories = value);
    }

    openNew(): void {
        console.dir(this.selectedProcessCategory);
        this.processCategoryDialog = true;
    }

    deleteSelectedProducts(): void {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected products?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.processCategoryService.deleteAll(this.selectedProcessCategory.map(value => value.id))
                    .subscribe(value => {
                        this.processCategories = this.processCategories.filter(val => !this.selectedProcessCategory.includes(val));
                        this.selectedProcessCategory = null;
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Successful',
                            detail: 'Process Category Deleted',
                            life: 3000
                        });
                    });
            }
        });
    }

    editProcessCategory(processCategory: ProcessCategory): void {
        this.processCategory = {...processCategory};
        this.setForm(processCategory);
        this.processCategoryDialog = true;
        this.isEditable = true;
    }

    deleteProcessCategory(processCategory: ProcessCategory): void {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + processCategory.name + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.processCategoryService.deleteAll([processCategory.id])
                    .subscribe(value => {
                        this.processCategories = this.processCategories.filter(val => val.id !== processCategory.id);
                        this.processCategory = {};
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Successful',
                            detail: 'Process Category Deleted',
                            life: 3000
                        });
                    });
            }
        });
    }


    hideDialog(): void {
        this.submitted = false;
        this.processCategory = {};
        this.processCategoryDialog = false;
        this.isEditable = false;
        this.clearForm();
    }

    setForm(wearableCategory: WearableCategory): void {
        this.processCategoryFormGroup.get('name').setValue(wearableCategory.name);
    }

    clearForm(): void {
        this.processCategoryFormGroup.get('name').setValue('');
    }

    saveProduct(): void {
        const processCategoryTemp: ProcessCategory = {
            name: this.processCategoryFormGroup.get('name').value,
        };
        if (this.isEditable) {
            processCategoryTemp.id = this.processCategory.id;
        }
        console.log('save process category');
        console.dir(processCategoryTemp);
        this.submitted = true;
        this.processCategoryService.save(processCategoryTemp).subscribe(value => {
            this.processCategories.push(value);
            this.isEditable = false;
            this.messageService.add({
                severity: 'success',
                summary: 'Successful',
                detail: 'Process Category Created',
                life: 3000
            });
            this.hideDialog();
            window.location.reload();
        });
    }
}
