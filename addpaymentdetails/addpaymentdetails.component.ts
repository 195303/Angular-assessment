import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserdetailsService } from '../services/userdetails.service';

@Component({
  selector: 'app-addpaymentdetails',
  templateUrl: './addpaymentdetails.component.html',
  styleUrls: ['./addpaymentdetails.component.css']
})
export class AddpaymentdetailsComponent {
  payDetails: any = this.detailService.getDetails();

  newDetail: any = {};

  searchDet: string = "";

  searchTyp: string = "";


  constructor(public detailService: UserdetailsService) { }

 
  addDetails(form: NgForm) {

    this.newDetail.id = this.payDetails.length + 1;
    this.detailService.addDetail(this.newDetail);
    this.newDetail = form.value;

    form.reset();
  }
  
  editDetails() {
    
  }

  deleteDetails(index: any) {
    this.payDetails.splice(index, 1);
  }

}



