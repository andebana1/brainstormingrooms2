import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/Forms'

import { Autenticacao } from '../../autenticacao.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formulario: FormGroup = new FormGroup({
    'email': new FormControl(null),
    'senha': new FormControl(null)
  })

  constructor(
    private autenticacao: Autenticacao
  ) { }

  ngOnInit() {
  }

  public autenticar(): void{
    //console.log(this.formulario)
    this.autenticacao.autenticar(
      this.formulario.value.email,
      this.formulario.value.senha
      )
  }
}