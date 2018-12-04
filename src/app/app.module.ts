import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
//Importacoes necessarias firebase
import { ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Auth } from './auth.service';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import {AngularFirestoreModule} from '@angular/fire/firestore';


import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';

import { environment } from '../environments/environment';
export const firebaseConfig = environment.firebaseConfig;

import {ROUTES, routing} from './app.routes';
import { CoreModule } from './core/core.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { CadastroUsuarioComponent } from './usuario/cadastrousuario/cadastrousuario.component';
import { LoginComponent } from './usuario/login/login.component';
import { SalaComponent } from './sala/sala.component';
import { DraggableModule } from './sala/draggable/draggable.module';
import { AreaTrabalhoComponent } from './area-trabalho/area-trabalho.component';
import { CriarsalaComponent } from './criarsala/criarsala.component';
import { EntrarsalaComponent } from './entrarsala/entrarsala.component';
import { SalaDeVotacaoComponent } from './sala-de-votacao/sala-de-votacao.component';

@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    FooterComponent,
    ContentComponent,
    UserProfileComponent,
    UsuarioComponent,
    CadastroUsuarioComponent,
    LoginComponent,
    SalaComponent,
    AreaTrabalhoComponent,
    CriarsalaComponent,
    EntrarsalaComponent,
    SalaDeVotacaoComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    RouterModule.forRoot(ROUTES),
    CoreModule,
    DraggableModule,
    routing,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
	  ReactiveFormsModule,
	  FormsModule
  ],
  providers: [Auth],
  bootstrap: [AppComponent]
})
export class AppModule { }
