import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ACCOUNTS } from '../../Shared/data';
@Component({
  selector: 'app-cash-order',
  imports: [CommonModule, FormsModule],
  standalone: true,
 template: `
    <h3>Cash Order</h3>
    <form (ngSubmit)="submit()">
      <label>Account #:
        <select [(ngModel)]="accountId" name="accountId" required>
          <option *ngFor="let acc of accounts" [value]="acc.id">{{acc.id}}</option>
        </select>
      </label>
      <label>Amount:
        <input type="number" [(ngModel)]="amount" name="amount" required min="1" />
      </label>
      <button type="submit">Process</button>
    </form>
    <div *ngIf="result">
      <p>Fee (2.5%): {{result.fee | currency}}</p>
      <p>Total deduction: {{result.total | currency}}</p>
      <p>Remaining Balance: {{result.newBalance | currency}}</p>
    </div>
  `
})
export class CashOrderComponent {
 accounts = ACCOUNTS;
  accountId = 0;
  amount = 0;
  result: any = null;

  submit(){
    const account = this.accounts.find(p=> p.id == this.accountId)
    if(!account) return;

    const fee = this.amount * 0.025;
    const total = this.amount + fee;
    const newBalance = account.balance - total;

    this.result = { fee, total, newBalance }
  }
  
}
