import { Usuario } from './usuario/usuario.model';
import * as firebase from 'firebase'

export class Auth{
	public cadastrarUser(user: Usuario): void{
		//console.log('Testando servico: ', user)
		firebase.auth().createUserWithEmailAndPassword(user.email, user.senha)
			.then((sucesso: any) =>{
				 console.log('Sucesso no cadastro do usuario')
				 console.log(sucesso)
				 firebase.database().ref(`dados_do_usuario/${btoa(user.email)}`)
					.set(user)
			}
			)
			.catch((erro: Error)=>{
			    console.log('Erro no cadastro do usuario')
				console.log(erro)
			}
			)
	}
}