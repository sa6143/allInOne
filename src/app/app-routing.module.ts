import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { DynamicTableComponent } from './Components/dynamic-table/dynamic-table.component';

const routes: Routes = [
  { path: 'signup', component: SignUpComponent },
  { path: 'home', component: HomePageComponent },
  { path: '', component: SignUpComponent },
  { path: 'dynamic', component: DynamicTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
