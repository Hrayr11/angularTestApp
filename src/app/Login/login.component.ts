import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-auth',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class AuthComponent implements OnInit {
  login!: FormGroup;

    ngOnInit(): void {
      this.login = new FormGroup({
       username: new FormControl(''),
       password: new FormControl('') 
      })
    } 
    onSubmit(){
       console.log(this.login);
    } 
}
