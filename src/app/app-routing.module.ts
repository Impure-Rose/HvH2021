import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { RulesComponent } from './rules/rules.component';
import { SignupComponent } from './signup/signup.component';
import { MediaComponent } from './media/media.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch:'full'},
  { path: 'info', component: InfoComponent},
  {path: 'rules', component: RulesComponent},
  {path:'media', component: MediaComponent},
  {path: 'sign-up', component: SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
