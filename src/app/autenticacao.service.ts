import { Usuario } from './acesso/usuario.model'
import * as firebase from 'firebase'
import { EmailValidator } from '@angular/forms';

export class Autenticacao{
    public cadastrarUsuario(usuario: Usuario): void{
        console.log('Tudo ok ate aqui: ', usuario)

        firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.senha)
        .then((resposta: any) => {

            //remover a senha do atributo senha do objeto usuário
            delete usuario.senha

            //registrando dados complementares do usuário no path email na base64
            firebase.database().ref(`dados_do_usuario/${btoa(usuario.email)}`)
                .set( usuario )

        })
        .catch((error: Error) => {
            console.log(error)
        })
    }
    public autenticar(email: string, senha: string): void{
        console.log('email: ', email)
        console.log('senha: ', senha)
        firebase.auth().signInWithEmailAndPassword(email, senha)
        .then((resposta: any) => console.log(resposta))
        .catch((error: Error) => console.log(error))
    }
}