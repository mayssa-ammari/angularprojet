import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

interface Apartment {
  apartmentNumber: string;
  floorNumber: string;
  surface: string;
  hasTerrace: boolean;
  terraceSurface: string;
  category: string;
  residenceId: string;
}

@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.css']
})
export class AddApartmentComponent {

    apartementform = new FormGroup({
    apartNum: new FormControl('' , Validators.required),
    floorNum: new FormControl('' , Validators.required),
    surface: new FormControl('' , Validators.required),
    terrace: new FormControl('yes' , Validators.required),
    surfaceterrace: new FormControl('' , Validators.required),
    category: new FormControl('S+1' , Validators.required),
    ResidenceId: new FormControl('' , Validators.required)
    });
    addApartment(){
      const apartmentData = this.apartementform.value;
  
      
      const newApartment: Apartment = {
        apartmentNumber: apartmentData.apartNum!,
        floorNumber: apartmentData.floorNum!,
        surface: apartmentData.surface!,
        hasTerrace: apartmentData.terrace === 'yes',
        terraceSurface: apartmentData.surfaceterrace!,
        category: apartmentData.category!,
        residenceId: apartmentData.ResidenceId!
      };

    console.log('New Apartment:', newApartment);
  }

}
