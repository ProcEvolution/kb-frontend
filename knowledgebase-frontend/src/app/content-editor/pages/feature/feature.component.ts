import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ConfirmationService, MessageService} from 'primeng/api';
import {Feature} from '../../../interfaces/feature';
import {FeatureService} from '../../../services/feature.service';
import {DataTypeService} from '../../../services/data-type.service';
import {DataType} from '../../../interfaces/data-type';
import {Interface} from '../../../interfaces/interface';
import {InterfaceService} from '../../../services/interface.service';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {

  features: Feature[];
  selectedFeature = [];
  featureDialog = false;
  feature: Feature = {};
  submitted = false;

  featureFormGroup: FormGroup;

  isEditable = false;

  dataTypes: DataType[] = [];
  selectedDatatype: DataType = {};

  interfaces: Interface[] = [];
  interfaceSelection: Interface[];

  constructor(private formBuilder: FormBuilder,
              private messageService: MessageService,
              private confirmationService: ConfirmationService,
              private featureService: FeatureService,
              private dataTypeService: DataTypeService,
              private interfaceService: InterfaceService) {

    this.featureFormGroup = formBuilder.group({
      name: ['']
    });
  }

  ngOnInit(): void {
    this.featureService.findAll().subscribe(value => this.features = value);
    this.dataTypeService.findAll().subscribe(value => this.dataTypes = value);
    this.interfaceService.findAll().subscribe(value => this.interfaces = value);
  }

  openNew(): void {
    this.featureDialog = true;
  }

  deleteSelectedFeature(): void {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected features?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.features = this.features.filter(val => !this.selectedFeature.includes(val));
        this.featureService.deleteAll(this.selectedFeature.map(value => value.id))
            .subscribe(value => {
              window.location.reload();
            });
        this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Datatype Deleted', life: 3000});
      }
    });
  }

  editFeature(feature: Feature): void {
    this.feature = {...feature};
    this.setForm(feature);
    this.featureDialog = true;
    this.isEditable = true;
  }

  deleteFeature(feature: Feature): void {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + feature.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.features = this.features.filter(val => val.id !== feature.id);
        this.feature = {};
        this.featureService.deleteAll([feature.id]).subscribe(value => window.location.reload());
        this.messageService.add({severity: 'success', summary: 'Successful', detail: 'DataType Deleted', life: 3000});
      }
    });
  }


  hideDialog(): void {
    this.submitted = false;
    this.feature = {};
    this.featureDialog = false;
    this.interfaceSelection = [];
    this.clearForm();
    this.isEditable = false;
  }

  setForm(feature: Feature): void {
    this.featureFormGroup.get('name').setValue(feature.name);
    this.selectedDatatype = this.dataTypes.find(value => value.name === feature.dataType);
    this.interfaceSelection = feature.anInterface === null ? [] : [feature.anInterface];
  }

  clearForm(): void {
    this.featureFormGroup.get('name').setValue('');
  }

  saveDataType(): void {
    console.log('interface selection');
    console.dir(this.interfaceSelection);
    const featureTemp: Feature = {
      name: this.featureFormGroup.get('name').value,
      dataType: this.selectedDatatype.name,
      anInterface: this.interfaceSelection.length > 0 ? this.interfaceSelection[0] : null,
    };
    if (this.isEditable) {
      featureTemp.id = this.feature.id;
      this.isEditable = false;
    }
    this.submitted = true;
    this.featureService.save(featureTemp).subscribe(value => {
      this.features.push(value);
      this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Datatype Created', life: 3000});
      this.hideDialog();
    });
  }


}
