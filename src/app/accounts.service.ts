import { Injectable, EventEmitter } from '@angular/core';

import { LoggingService } from './logging.service';

@Injectable()
export class AccountService {

  constructor(private loggingService: LoggingService) { }
  
  statusUpdated = new EventEmitter<string>();
  
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  addAccount(name: string, status: string) {
    this.accounts.push({ name: name, status: status });
    this.loggingService.statusLog(status);
  }

  updateStatus(id: number, status: string) {
    this.loggingService.statusLog(status);
    this.accounts[id].status = status;
  }
}