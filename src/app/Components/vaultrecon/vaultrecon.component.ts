import { Component } from '@angular/core';
import { ACCOUNTS } from '../../Shared/data';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vaultrecon',
  imports: [CommonModule, FormsModule],
template: `
    <h3>Vault Reconciliation</h3>
    <form (ngSubmit)="reconcile()">
      <label>Account #:
        <select [(ngModel)]="accountId" name="accountId" required>
          <option *ngFor="let acc of accounts" [value]="acc.id">{{acc.id}}</option>
        </select>
      </label>
      <label>Physical Cash Count:
        <input [(ngModel)]="physicalCash" name="physicalCash" type="number" required />
      </label>
      <button type="submit">Reconcile</button>
    </form>
    <div *ngIf="result">
      <p>System Balance: {{result.system | currency}}</p>
      <p>Difference: {{result.difference | currency}}</p>
    </div>
  `
})
export class VaultreconComponent {
  accounts = ACCOUNTS;
  accountId = 0;
  physicalCash = 0;
  result: any = null;

  reconcile() {
    const account = this.accounts.find(a => a.id == this.accountId);
    if (!account) return;
    this.result = {
      system: account.balance,
      difference: this.physicalCash - account.balance
    };
  }
}
