import {Component, OnInit} from '@angular/core';
import {Wearable} from '../../../interfaces/wearable';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ConfirmationService, MessageService} from 'primeng/api';
import {WearableService} from '../../../services/wearable.service';
import {WearableCategory} from '../../../interfaces/wearable-category';
import {WearableCategoryService} from '../../../services/wearable-category.service';
import {Feature} from '../../../interfaces/feature';
import {FeatureService} from '../../../services/feature.service';

@Component({
    selector: 'app-wearable',
    templateUrl: './wearable.component.html',
    styleUrls: ['./wearable.component.css']
})
export class WearableComponent implements OnInit {

    wearables: Wearable[];
    file: any;
    selectedWearable = [];
    wearableDialog = false;
    wearable: Wearable;
    submitted = false;

    features: Feature[] = [];
    selectedFeatures: Feature[] = [];

    wearableFormGroup: FormGroup;
    wearableCategories: WearableCategory[];
    wearableCategory: WearableCategory[];

    isEditable = false;
    editImage = false;

    constructor(private wearableService: WearableService,
                private formBuilder: FormBuilder,
                private messageService: MessageService,
                private confirmationService: ConfirmationService,
                private wearableCategoryService: WearableCategoryService,
                private featureService: FeatureService) {

        this.wearableFormGroup = formBuilder.group({
            name: [''],
            description: ['']
        });
    }

    ngOnInit(): void {
        this.wearableService.findAll().subscribe(value => this.wearables = value);
        this.wearableCategoryService.findAll().subscribe(value => this.wearableCategories = value);
        this.featureService.findAll().subscribe(value => this.features = value);
    }

    openNew(): void {
        this.wearableDialog = true;
        console.dir(this.wearables);
    }

    deleteSelectedProducts(): void {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected wearables?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.wearableService.deleteAll(this.selectedWearable.map(value => value.id))
                    .subscribe(value => {
                        this.wearables = this.wearables.filter(val => !this.selectedWearable.includes(val));
                        this.selectedWearable = null;
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Successful',
                            detail: 'Wearables Deleted',
                            life: 3000
                        });
                    });
            }
        });
    }

    editWearable(wearable: Wearable): void {
        this.wearable = {...wearable};
        this.setForm(wearable);
        this.wearableDialog = true;
        this.isEditable = true;
    }

    deleteWearableCategory(wearable: Wearable): void {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + wearable.name + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.wearableService.deleteAll([wearable.id])
                    .subscribe(value => {
                        this.wearables = this.wearables.filter(val => val.id !== wearable.id);
                        this.wearable = {};
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Successful',
                            detail: 'Wearable Deleted',
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
        this.wearable = {};
        this.wearableDialog = false;
        this.clearForm();
        this.isEditable = false;
        this.editImage = false;
    }

    setForm(wearable: Wearable): void {
        this.wearableFormGroup.get('name').setValue(wearable.name);
        this.wearableFormGroup.get('description').setValue(wearable.description);
        this.wearableCategory = wearable.wearableCategory;
        this.selectedFeatures = wearable.features;
    }

    clearForm(): void {
        this.wearableFormGroup.get('name').setValue('');
        this.wearableFormGroup.get('description').setValue('');
        this.file = null;
    }

    saveProduct(): void {
        this.submitted = true;
        const wearableTemp: Wearable = {
            name: this.wearableFormGroup.get('name').value,
            description: this.wearableFormGroup.get('description').value,
            wearableCategory: this.wearableCategory,
            features: this.selectedFeatures,
        };

        if (this.isEditable) {
            wearableTemp.id = this.wearable.id;
        }
        this.wearableService.save(wearableTemp).subscribe(value => {
            if (!this.isEditable) {
                this.wearableService.uploadIcon(value.id, this.file)
                    .subscribe(value1 => {
                        this.wearables.push(value1);
                        this.wearables = [...this.wearables];
                        this.wearableDialog = false;
                        this.wearable = {};
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Successful',
                            detail: 'Wearable Created',
                            life: 3000
                        });
                    });
            }
            if (this.isEditable && this.editImage && this.file !== null && this.file !== undefined) {
                this.wearableService.uploadIcon(value.id, this.file)
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
