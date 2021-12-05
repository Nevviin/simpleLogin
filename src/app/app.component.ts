import { Component } from '@angular/core';
import { LoginService } from './_services';
import {FormGroup, FormBuilder,Validators, FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simpleLogin';
   form:FormGroup;
  submitted = false;
  constructor(
    private loginService:LoginService,
    private formBuilder:FormBuilder
  ){}

  ngOnInit() {
    this.form = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });
}
get f() { return this.form.controls; }

  onSubmit()
  {
    console.log("submit is called on button click");
    console.log(this.f.username.value);
    this.submitted=true;
    this.loginService.Login(this.f.username.value,this.f.password.value);
  }
}