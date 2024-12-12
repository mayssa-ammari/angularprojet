import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
// import { Apartment } from '../core/models'; // Ensure this path is correct or the module exists
//import { residence } from '../models';


@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent {
  residenceForm: FormGroup;
  apartmentForm: FormGroup ; 
  constructor(private fb: FormBuilder) {
    this.residenceForm = this.fb.group({
      id: [],
      name: ['', Validators.required, Validators.minLength(3)],
      address: ['', Validators.required],
      image: ['', [Validators.required, Validators.pattern('^(http|https)://')]],
      status: ['Disponible'],
      apartments: this.fb.array([])
    });
    this.apartmentForm = this.fb.group({
      apartNum: ['', Validators.required],
      floorNum: ['', Validators.required],
      surface: ['', Validators.required],
      terrace: ['yes', Validators.required],
      surfaceterrace: ['', Validators.required],
      category: ['S+1', Validators.required],
      residenceId: ['', Validators.required]
    });
  }

  get apartments() {
    return this.residenceForm.get('apartments') as FormArray;
  }

  addApartment() {
    this.apartments.push(this.apartmentForm);
    this.apartmentForm.reset();
  }
  onSubmit() {
    console.log(this.residenceForm.value);
  }
}
