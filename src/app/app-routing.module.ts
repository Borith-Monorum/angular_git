import { NgModule } from '@angular/core';
import { AboutComponent } from './page/about/about.component';
import { ContactComponent } from './page/contact/contact.component';
import { HomeComponent } from './page/home/home.component';
import { MenuComponent } from './page/menu/menu.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'home',component:HomeComponent},
  {path: 'aboutus',component:MenuComponent},
  {path: 'contactus',component:AboutComponent},
  {path: 'asean',component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
