import { UserListComponent } from './view/user-list/user-list.component';

import { AssureursComponent } from './menu/assureurs/assureurs.component';
import { CourtierGrossistesComponent } from './menu/courtier-grossistes/courtier-grossistes.component';
import { CourtierSimplesComponent } from './menu/courtier-simples/courtier-simples.component';
import { LoginComponent } from './menu/login/login.component';
import { BlogsComponent } from './menu/blogs/blogs.component';
import { BlogComponent } from './menu/blog/blog.component';
import { ContactComponent } from './menu/contact/contact.component';
import { AboutComponent } from './menu/about/about.component';
import { HomeComponent } from './menu/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent } from './menu/services/services.component';
import { TpePmeComponent } from './menu/tpe-pme/tpe-pme.component';
import { RegisterComponent } from './menu/register/register.component';
import { UserdetailComponent } from './view/userdetail/userdetail.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'menu/services', component: ServicesComponent, pathMatch: 'full'},
  {path: 'menu/contact', component: ContactComponent, pathMatch: 'full'},
  {path: 'menu/blog', component: BlogComponent, pathMatch: 'full'},
  {path: 'menu/blogs', component: BlogsComponent, pathMatch: 'full'},
  {path: 'menu/login', component: LoginComponent, pathMatch: 'full'},
  {path: 'menu/register', component: RegisterComponent, pathMatch: 'full'},
  {path: 'menu/courtier-simples', component: CourtierSimplesComponent, pathMatch: 'full'},
  {path: 'menu/courtier-grossistes', component: CourtierGrossistesComponent, pathMatch: 'full'},
  {path: 'menu/about', component: AboutComponent, pathMatch: 'full'},
  {path: 'menu/tpe-pme', component: TpePmeComponent, pathMatch: 'full'},
  {path: 'menu/assureurs', component: AssureursComponent, pathMatch: 'full'},
  {path: 'view/userview', component: UserdetailComponent, pathMatch: 'full'},
  {path: 'view/users', component: UserListComponent, pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'corrected' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
