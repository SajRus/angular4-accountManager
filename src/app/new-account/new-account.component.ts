import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from "app/accounts.service";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: []
})

export class NewAccountComponent {

constructor(private accountService: AccountService){
  
  
  // this.accountService.statusUpdated.subscribe(
  //   (status: string) => alert('Nuovo stato ' + status)
  // )
}
   
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
  }
}
