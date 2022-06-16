import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { AuthGuard } from './components/auth/auth-guard';
import { DetailsComponent } from './components/details/details.component';
import { ListComponent } from './components/list/list.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path:'login', component:LoginComponent
  },
  {
    path: '', redirectTo: 'books', pathMatch:'full'
  },
  {
    path: 'books', component:ListComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'book/:id', component:DetailsComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'add', component:AddComponent,
    canActivate:[AuthGuard]
  } /* ,
  { path: '404', component : NotFoundComponent},
      
  { path: '**', redirectTo: '/404', pathMatch: 'full'} */
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ AuthGuard ]
})
export class AppRoutingModule { }
