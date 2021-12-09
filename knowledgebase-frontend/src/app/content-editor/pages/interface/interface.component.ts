import { Component, OnInit } from '@angular/core';
import {Activity} from '../../../interfaces/activity';
import {DataType} from '../../../interfaces/data-type';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivityService} from '../../../services/activity.service';
import {ConfirmationService, MessageService} from 'primeng/api';
import {DataTypeService} from '../../../services/data-type.service';
import {Interface} from '../../../interfaces/interface';
import {InterfaceService} from '../../../services/interface.service';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent implements OnInit {

  interfaces: Interface[];
  selectedInterfaces = [];
  interfaceDialog = false;
  anInterface: Interface = {};
  submitted = false;

  dataTypes: DataType[];
  dataType: DataType[] = [];

  inOuts = [{name: 'input'}, {name: 'output'}];
  selectedInOut: any = {};

  isEditable = false;

  interfaceFormGroup: FormGroup;



  constructor(private interfaceService: InterfaceService,
              private formBuilder: FormBuilder,
              private messageService: MessageService,
              private confirmationService: ConfirmationService) {

    this.interfaceFormGroup = formBuilder.group({
      name: [''],
    });
  }

  ngOnInit(): void {
    this.interfaceService.findAll().subscribe(value => this.interfaces = value);
  }

  openNew(): void {
    this.interfaceDialog = true;
  }

  deleteSelectedInterfaces(): void {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected activities?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.interfaceService.deleteAll(this.selectedInterfaces.map(value => value.id)).subscribe(value => {
          this.interfaces = this.interfaces.filter(val => !this.selectedInterfaces.includes(val));
          this.selectedInterfaces = null;
          this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Activities Deleted', life: 3000});
        });
      }
    });
  }

  editActivity(anInterface: Interface): void {
    this.anInterface = {...anInterface};
    this.setForm(anInterface);
    this.interfaceDialog = true;
    this.isEditable = true;
  }

  deleteActivity(anInterface: Interface): void {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + anInterface.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.interfaces = this.interfaces.filter(val => val.id !== anInterface.id);
        this.anInterface = {};
        this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Interface Deleted', life: 3000});
      }
    });
  }


  hideDialog(): void {
    this.submitted = false;
    this.anInterface = {};
    this.interfaceDialog = false;
    this.clearForm();
    this.isEditable = false;
  }

  setForm(anInterface: Interface): void {
    this.interfaceFormGroup.get('name').setValue(anInterface.name);
    this.selectedInOut = this.inOuts.find(value => value.name === anInterface.inOut);
  }

  clearForm(): void {
    this.interfaceFormGroup.get('name').setValue('');
    this.dataType = [];
  }

  saveProduct(): void {
    const interfaceTemp: Interface = {
      name: this.interfaceFormGroup.get('name').value,
      inOut: this.selectedInOut.name,
    };

    if (this.isEditable) {
      interfaceTemp.id = this.anInterface.id;
    }

    this.submitted = true;
    this.interfaceService.save(interfaceTemp).subscribe(value => this.interfaces.push(value));
  }
}
