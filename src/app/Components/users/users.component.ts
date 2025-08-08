import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ACCOUNTS } from '../../Shared/data';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h3>User Accounts</h3>
    <table border="1">
      <tr>
        <th>Account #</th>
        <th>Owner</th>
        <th>Balance</th>
      </tr>
      <tr *ngFor="let acc of accounts">
        <td>{{acc.id}}</td>
        <td>{{acc.owner}}</td>
        <td>{{acc.balance | currency}}</td>
      </tr>
    </table>
  `
})
export class UsersComponent {
  accounts = ACCOUNTS;
}
