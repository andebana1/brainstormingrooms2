import {Routes} from '@angular/router'
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SalaComponent } from './sala/sala.component';

export const ROUTES: Routes = [
    {path: '', component: UserProfileComponent},
    {path: 'sala/', component: SalaComponent}
]