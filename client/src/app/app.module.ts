import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/Home/home.component';
import { SearchComponent } from './models/Flats/Search/search.component';
import { LoginComponent } from './models/User/Login/login.component';
import { RegisterComponent } from './models/User/Register/register.component';
import { DetailsComponent } from './models/Flats/Details/details.component';
import { CreatePostsComponent } from './models/Flats/Create/create.module';
import { HeaderComponent } from './models/Core/Header/header.component';
import { AboutComponent } from './components/About/about.component';
import { EditComponent } from './models/Flats/Edit/edit.component';
import { appInterceptorProvider } from './app.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    SearchComponent,
    DetailsComponent,
    CreatePostsComponent,
    AboutComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [appInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
