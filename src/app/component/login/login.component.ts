import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../class/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: Usuario = new Usuario();
  constructor() { }

  ngOnInit() {
  }

  login() {
    if (this.user.username === this.user.password) {
      alert('Login ok');
    } else {
      alert('Login no ok');
    }
  }

}
