import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'

import { Usuario } from '../usuario.model'

import { Autenticacao } from '../../autenticacao.service'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public formulario: FormGroup = new FormGroup({
    'email': new FormControl(null),
    'nome_completo': new FormControl(null),
    'nickname': new FormControl(null),
    'data_nascimento': new FormControl(null),
    'senha': new FormControl(null),
  })

  constructor(
    private autenticacao: Autenticacao
  ) { }

  ngOnInit() {
  }

  //public exibirPainelLogin(): void{
    //this.exibirPainel.emit('Login')
 // }

  public cadastrarUsuario(): void {    
    let usuario: Usuario = new Usuario(
      
        this.formulario.value.email,
        this.formulario.value.nome_completo,
        this.formulario.value.nickname,
        this.formulario.value.data_nascimento,
        this.formulario.value.senha
    )
    this.autenticacao.cadastrarUsuario(usuario)
  }
}