import { Component, Input, OnInit } from '@angular/core';
import { IAccount } from 'src/app/models/account.model';
import { NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() account: IAccount = {} as IAccount;

  constructor() { }

  ngOnInit(): void {
  }
}
