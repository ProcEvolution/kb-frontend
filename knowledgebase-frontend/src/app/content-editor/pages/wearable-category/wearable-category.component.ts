import {Component, OnInit} from '@angular/core';
import {WearableCategoryService} from '../../../services/wearable-category.service';
import {WearableCategory} from '../../../interfaces/wearable-category';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ConfirmationService, MessageService} from 'primeng/api';

@Component({
    selector: 'app-wearable-category',
    templateUrl: './wearable-category.component.html',
    styleUrls: ['./wearable-category.component.css']
})
export class WearableCategoryComponent implements OnInit {
    wearableCategories: WearableCategory[];
    file: any;
    selectedWearableCategory = [];
    wearableCategoryDialog = false;
    wearableCategory: WearableCategory;
    submitted = false;
    isEditable = false;

    wearableCategoryFormGroup: FormGroup;
    editImage = false;

    constructor(private wearableCategoryService: WearableCategoryService,
                private formBuilder: FormBuilder,
                private messageService: MessageService,
                private confirmationService: ConfirmationService) {

        this.wearableCategoryFormGroup = formBuilder.group({
            name: [''],
            description: ['']
        });
    }

    ngOnInit(): void {
        this.wearableCategoryService.findAll().subscribe(value => this.wearableCategories = value);
    }

    openNew(): void {
        this.wearableCategoryDialog = true;
    }

    deleteSelectedProducts(): void {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected products?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.wearableCategoryService.deleteAll(this.selectedWearableCategory.map(value => value.id))
                    .subscribe(value => {
                        this.wearableCategories = this.wearableCategories.filter(val => !this.selectedWearableCategory.includes(val));
                        this.selectedWearableCategory = null;
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Successful',
                            detail: 'Wearable Categories Deleted',
                            life: 3000
                        });
                    });
            }
        });
    }

    editWearableCategory(wearableCategory: WearableCategory): void {
        this.wearableCategory = {...wearableCategory};
        this.setForm(wearableCategory);
        this.wearableCategoryDialog = true;
        this.isEditable = true;
    }

    deleteWearableCategory(wearableCategory: WearableCategory): void {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + wearableCategory.name + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.wearableCategoryService.deleteAll([wearableCategory.id])
                    .subscribe(value => {
                        this.wearableCategories = this.wearableCategories.filter(val => val.id !== wearableCategory.id);
                        this.wearableCategory = {};
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Successful',
                            detail: 'Wearable Category Deleted',
                            life: 3000
                        });
                    });
            }
        });
    }

    selectedIcon($event: any): void {
        this.file = $event.files[0];
    }

    removeIcon(): void {

    }

    hideDialog(): void {
        this.submitted = false;
        this.wearableCategory = {};
        this.wearableCategoryDialog = false;
        this.isEditable = false;
        this.editImage = false;
        this.clearForm();
    }

    setForm(wearableCategory: WearableCategory): void {
        this.wearableCategoryFormGroup.get('name').setValue(wearableCategory.name);
        this.wearableCategoryFormGroup.get('description').setValue(wearableCategory.description);
    }

    clearForm(): void {
        this.wearableCategoryFormGroup.get('name').setValue('');
        this.wearableCategoryFormGroup.get('description').setValue('');
        this.file = null;
    }

    saveProduct(): void {
        const wearableCategoryTemp: WearableCategory = {
            name: this.wearableCategoryFormGroup.get('name').value,
            description: this.wearableCategoryFormGroup.get('description').value
        };
        this.submitted = true;

        if (this.isEditable) {
            wearableCategoryTemp.id = this.wearableCategory.id;
        }

        this.wearableCategoryService.save(wearableCategoryTemp).subscribe(value => {
            console.log('test');
            console.dir(this.isEditable);
            if (!this.isEditable) {
                console.log('fired here');
                console.log(this.isEditable);
                this.wearableCategoryService.uploadIcon(value.id, this.file)
                    .subscribe(value1 => {
                        this.wearableCategories.push(value1);
                        this.wearableCategories = [...this.wearableCategories];
                        this.wearableCategoryDialog = false;
                        this.wearableCategory = {};
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Successful',
                            detail: 'Wearablecategory Created',
                            life: 3000
                        });
                    });
            }
            if (this.isEditable && this.editImage && this.file !== null && this.file !== undefined) {
                this.wearableCategoryService.uploadIcon(value.id, this.file)
                    .subscribe();
            }
            this.hideDialog();
            window.location.reload();
        });
    }

    activateImageEdit(): void {
        this.editImage = true;
    }
}
