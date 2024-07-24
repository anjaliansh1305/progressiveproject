import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerTS } from '../../types/tstypes/Customerts';
import { of } from 'rxjs';

@Component({
  selector: 'app-customersample',
  standalone: true,
  imports: [],
  templateUrl: './customersample.component.html',
  styleUrls: ['./customersample.component.css']
})
export class CustomersampleComponent {

  customer:any=CustomerTS;

  constructor(){
    this.customer=new CustomerTS("205","Anjali","anjali@gmail.com","Pass@12","UserName","Software Engineer")
  }
  
}

