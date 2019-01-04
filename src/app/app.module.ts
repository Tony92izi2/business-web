import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { ServicesComponent } from './menu/services/services.component';
import { HomeComponent } from './menu/home/home.component';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { AboutComponent } from './menu/about/about.component';
import { ContactComponent } from './menu/contact/contact.component';
import { BlogComponent } from './menu/blog/blog.component';
import { BlogsComponent } from './menu/blogs/blogs.component';
import { LoginComponent } from './menu/login/login.component';
import { CourtierSimplesComponent } from './menu/courtier-simples/courtier-simples.component';
import { CourtierGrossistesComponent } from './menu/courtier-grossistes/courtier-grossistes.component';
import { HttpClientModule } from '@angular/common/http';
import { TpePmeComponent } from './menu/tpe-pme/tpe-pme.component';
import { AssureursComponent } from './menu/assureurs/assureurs.component';
import { RegisterComponent } from './menu/register/register.component';
import { UserdetailComponent } from './view/userdetail/userdetail.component';
import { UserListComponent } from './view/user-list/user-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    BlogComponent,
    BlogsComponent,
    LoginComponent,
    CourtierSimplesComponent,
    CourtierGrossistesComponent,
    TpePmeComponent,
    AssureursComponent,
    RegisterComponent,
    UserdetailComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UiModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
