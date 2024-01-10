
export class UserdetailsService {
  public details: any[] = [{  username: 'Sanjay', cardnumber: '9460-6662-6982', balance: 18765 },
{  username: 'Ram', cardnumber: '9887-9007-5313', balance: 109980 },{  username: 'John', cardnumber: '7988-6985-5749', balance: 98779 }];

  addDetail(details:any){
    
    this.details.push(details);
  }

  getDetails(): any[] {

    return this.details;
  }
  
  
  }


