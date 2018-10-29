import { ContentComponent } from './content/content.component';

import {Routes, RouterModule} from '@angular/router'
import { ModuleWithProviders } from '@angular/core'
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SalaComponent } from './sala/sala.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from  './usuario/login/login.component'
import { CadastrousuarioComponent } from './usuario/cadastrousuario/cadastrousuario.component';
import { AreaTrabalhoComponent } from './area-trabalho/area-trabalho.component';
import { CriarsalaComponent } from './criarsala/criarsala.component';
import { EntrarsalaComponent } from './entrarsala/entrarsala.component';



export const ROUTES: Routes = [
    {path: '', component: ContentComponent},
    {path: 'sala', component: SalaComponent},
    {path: 'login', component: LoginComponent},
    {path: 'cadastro', component: CadastrousuarioComponent},
    {path: 'area-trabalho', component: AreaTrabalhoComponent},
    {path: 'criar-sala', component: CriarsalaComponent},
    {path: 'entrar-sala', component: EntrarsalaComponent}
]

export const routing: ModuleWithProviders = RouterModule.forRoot(ROUTES);