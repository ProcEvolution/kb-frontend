import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ConfirmationService, MessageService} from 'primeng/api';
import {DataType} from '../../../interfaces/data-type';
import {DataTypeService} from '../../../services/data-type.service';

@Component({
  selector: 'app-data-type',
  templateUrl: './data-type.component.html',
  styleUrls: ['./data-type.component.css']
})
export class DataTypeComponent implements OnInit {


  dataTypes: DataType[];
  selectedDataType = [];
  dataTypeDialog = false;
  dataType: DataType = {};
  submitted = false;

  dataTypeFormGroup: FormGroup;

  isEditable = false;

  constructor(private dataTypeService: DataTypeService,
              private formBuilder: FormBuilder,
              private messageService: MessageService,
              private confirmationService: ConfirmationService) {

    this.dataTypeFormGroup = formBuilder.group({
      name: ['']
    });
  }

  ngOnInit(): void {
    this.dataTypeService.findAll().subscribe(value => this.dataTypes = value);
  }

  openNew(): void {
    this.dataTypeDialog = true;
  }

  deleteSelectedDataType(): void {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected data type?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.dataTypes = this.dataTypes.filter(val => !this.selectedDataType.includes(val));
        this.dataTypeService.deleteAll(this.selectedDataType.map(value => value.id))
            .subscribe(value => {
              window.location.reload();
            });
        this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Datatype Deleted', life: 3000});
      }
    });
  }

  editDataType(dataType: DataType): void {
    this.dataType = {...dataType};
    this.setForm(dataType);
    this.dataTypeDialog = true;
    this.isEditable = true;
  }

  deleteDataType(dataType: DataType): void {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + dataType.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.dataTypes = this.dataTypes.filter(val => val.id !== dataType.id);
        this.dataType = {};
        this.dataTypeService.deleteAll([dataType.id]).subscribe(value => window.location.reload());
        this.messageService.add({severity: 'success', summary: 'Successful', detail: 'DataType Deleted', life: 3000});
      }
    });
  }


  hideDialog(): void {
    this.submitted = false;
    this.dataType = {};
    this.dataTypeDialog = false;
    this.clearForm();
    this.isEditable = false;
  }

  setForm(dataType: DataType): void {
    this.dataTypeFormGroup.get('name').setValue(dataType.name);
  }

  clearForm(): void {
    this.dataTypeFormGroup.get('name').setValue('');
  }

  saveDataType(): void {
    const dataTypeTemp: DataType = {
      name: this.dataTypeFormGroup.get('name').value,
    };
    if (this.isEditable) {
      dataTypeTemp.id = this.dataType.id;
      this.isEditable = false;
    }
    this.submitted = true;
    this.dataTypeService.save(dataTypeTemp).subscribe(value => {
      this.dataTypes.push(value);
      this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Datatype Created', life: 3000});
    });
  }


}
