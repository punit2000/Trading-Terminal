import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { JoinusComponent } from './joinus/joinus.component';

const routes: Routes = [

  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'aboutus', component: AboutusComponent},
  {path:'home', component: HomeComponent},
  {path:'joinus', component: JoinusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
