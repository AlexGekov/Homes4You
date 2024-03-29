import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/Home/home.component';
import { SearchComponent } from './models/Flats/Search/search.component';
import { LoginComponent } from './models/User/Login/login.component';
import { RegisterComponent } from './models/User/Register/register.component';
import { CreatePostsComponent } from './models/Flats/Create/create.module';
import { AboutComponent } from './components/About/about.component';
import { DetailsComponent } from './models/Flats/Details/details.component';
import { EditComponent } from './models/Flats/Edit/edit.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  {
    path: "catalog", children: [
      { path: "", component: SearchComponent },
      { path: ":postId/details/edit", component: EditComponent },
      { path: ":postId/details", component: DetailsComponent },
    ]
  },
  { path: "create", component: CreatePostsComponent },
  { path: "about", component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
