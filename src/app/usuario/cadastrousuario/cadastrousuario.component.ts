import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'

import { Usuarios } from '../usuarios.model'

@Component({
  selector: 'app-cadastrousuario',
  templateUrl: './cadastrousuario.component.html',
  styleUrls: ['./cadastrousuario.component.css']
})
export class CadastrousuarioComponent implements OnInit {

  public formulario: FormGroup = new FormGroup({
    'email': new FormControl(null),
    'nome_completo': new FormControl(null),
    'apelido': new FormControl(null),
    'data_nascimento': new FormControl(null),
    'senha': new FormControl(null)

  })

  constructor() { }

  ngOnInit() {
  }

  public cadastrarUsuario(): void {
    console.log(this.formulario)

    let usuario: Usuarios = new Usuarios(
      this.formulario.value.email,
      this.formulario.value.nome_completo,
      this.formulario.value.apelido,
      this.formulario.value.data_nascimento,
      this.formulario.value.senha
    )

    console.log(usuario)
  }
}
