// import { Component } from '@angular/core';
// import { AccountTS } from '../../types/tstypes/Accountts';

// @Component({
//   selector: 'app-accountsample',
//   standalone: true,
//   imports: [],
//   templateUrl: './accountsample.component.html',
//   styleUrls: ['./accountsample.component.css']
// })
// export class AccountsampleComponent {

//   account:any = AccountTS;

//   constructor(){
//     this.account=new AccountTS("101",6456.56,"201");
//   }

//   }

  


import { Component } from '@angular/core';
import { AccountTS } from '../../types/tstypes/Accountts';
 
@Component({
  selector: 'app-accountsample',
  standalone: true,
  imports: [],
  templateUrl: './accountsample.component.html',
  styleUrls: ['./accountsample.component.css']
})
export class AccountsampleComponent {
  // account:any;
 
  account:AccountTS = new AccountTS("1",50000.00,"2");
 
 
 
 
}