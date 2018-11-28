import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { Usuario } from '../usuario.model';
import { Auth } from '../../auth.service';

@Component({
  selector: 'app-cadastrousuario',
  templateUrl: './cadastrousuario.component.html',
  styleUrls: ['./cadastrousuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  //Cria os FormGroups com os FormControls para controlar os campos do template html 
  //Tem acesso aos dados do form_cadastro para depois conectar com o firebase
  public form_cadastro: FormGroup = new FormGroup({
	'email':new FormControl(null),
	'nomeCompleto':new FormControl(null),
	'nickname': new FormControl(null),
	'dataNascimento': new FormControl(null),
	'senha': new FormControl(null)
  })

  constructor(
	private auth: Auth
  ) { }

  ngOnInit() {
  }

public cadastrarUser(): void{

	let user: Usuario = new Usuario(
		this.form_cadastro.value.email,
		this.form_cadastro.value.nomeCompleto,
		this.form_cadastro.value.nickname,
		this.form_cadastro.value.dataNascimento,
		this.form_cadastro.value.senha
	)

	this.auth.cadastrarUser(user)

  }

}
