import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-auth',
  imports: [ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent implements OnInit {
  login!: FormGroup;

    ngOnInit(): void {
      this.login = new FormGroup({
       username: new FormControl(''),
      })
    }
    onSubmit(){

    }
}
