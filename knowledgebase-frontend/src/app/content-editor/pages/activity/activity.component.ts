import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ConfirmationService, MessageService} from 'primeng/api';
import {Activity} from '../../../interfaces/activity';
import {ActivityService} from '../../../services/activity.service';
import {Feature} from '../../../interfaces/feature';
import {FeatureService} from '../../../services/feature.service';


@Component({
    selector: 'app-activity',
    templateUrl: './activity.component.html',
    styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

    activities: Activity[];
    selectedActivity = [];
    activityDialog = false;
    activity: Activity = {};
    submitted = false;

    features: Feature[] = [];
    selectedFeatures: Feature[] = [];

    isEditable = false;

    activityFormGroup: FormGroup;

    constructor(private activityService: ActivityService,
                private formBuilder: FormBuilder,
                private messageService: MessageService,
                private confirmationService: ConfirmationService,
                private featureService: FeatureService) {

        this.activityFormGroup = formBuilder.group({
            name: [''],
        });
    }

    ngOnInit(): void {
        this.activityService.findAll().subscribe(value => this.activities = value);
        this.featureService.findAll().subscribe(value => this.features = value);
    }

    openNew(): void {
        this.activityDialog = true;
    }

    deleteSelectedActivities(): void {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected activities?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.activities = this.activities.filter(val => !this.selectedActivity.includes(val));
                this.activityService.deleteAll(this.selectedActivity.map(value => value.id))
                    .subscribe(value => {
                        window.location.reload();
                    });
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Activities Deleted',
                    life: 3000
                });
            }
        });
    }

    editActivity(activity: Activity): void {
        this.activity = {...activity};
        this.setForm(activity);
        this.activityDialog = true;
        this.isEditable = true;
    }

    deleteActivity(activity: Activity): void {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + activity.name + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.activities = this.activities.filter(val => val.id !== activity.id);
                this.activity = {};
                this.activityService.deleteAll([activity.id]).subscribe(value => {
                    window.location.reload();
                });
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Activity Deleted',
                    life: 3000
                });
            }
        });
    }


    hideDialog(): void {
        this.submitted = false;
        this.activity = {};
        this.activityDialog = false;
        this.clearForm();
        this.isEditable = false;
    }

    setForm(activity: Activity): void {
        this.activityFormGroup.get('name').setValue(activity.name);
        this.selectedFeatures = activity.features;
    }

    clearForm(): void {
        this.activityFormGroup.get('name').setValue('');
        this.selectedFeatures = [];
    }

    saveProduct(): void {
        console.log('features');
        console.dir(this.selectedFeatures);
        const activityTemp: Activity = {
            name: this.activityFormGroup.get('name').value,
            features: this.selectedFeatures,
        };
        if (this.isEditable) {
            activityTemp.id = this.activity.id;
        }
        this.submitted = true;
        this.activityService.save(activityTemp).subscribe(value => {
            this.activities.push(value);
            this.hideDialog();
        });
    }

}
