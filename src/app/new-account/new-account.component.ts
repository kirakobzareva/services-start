import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LoggingSevice } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {

  constructor(private loggingService: LoggingSevice, private accountsService: AccountsService) {}

  ngOnInit(): void {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.onAccountAdded(accountName, accountStatus);
   // this.loggingService.logStatusChange(accountStatus);
  }
}
