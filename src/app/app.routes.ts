import {Routes, RouterModule} from '@angular/router'


import { ContentComponent } from './content/content.component';
import { ModuleWithProviders } from '@angular/core'
//import { UserProfileComponent } from './user-profile/user-profile.component';
import { SalaComponent } from './sala/sala.component';
//import { HeaderComponent } from './header/header.component';
import { LoginComponent } from  './acesso/login/login.component'
import { CadastroComponent } from './acesso/cadastro/cadastro.component';
import { AreaTrabalhoComponent } from './area-trabalho/area-trabalho.component';
import { CriarsalaComponent } from './criarsala/criarsala.component';
import { EntrarsalaComponent } from './entrarsala/entrarsala.component';

export const ROUTES: Routes = [
    {path: '', component: ContentComponent},
    {path: 'sala', component: SalaComponent},
    {path: 'login', component: LoginComponent},
    {path: 'cadastro', component: CadastroComponent},
    {path: 'area-trabalho', component: AreaTrabalhoComponent},
    {path: 'criar-sala', component: CriarsalaComponent},
    {path: 'entrar-sala', component: EntrarsalaComponent},
    //{path: 'header', component: HeaderComponent}
]

export const routing: ModuleWithProviders = RouterModule.forRoot(ROUTES);