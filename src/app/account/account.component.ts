import { Component, Input } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LoggingSevice } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: { name: string; status: string };
  @Input() id: number;

  constructor(private loggingService: LoggingSevice, private accountsService:AccountsService) {}

  onSetTo(status: string) {
    this.accountsService.onStatusChanged(this.id, status);
    //this.loggingService.logStatusChange(status);
  }
}
