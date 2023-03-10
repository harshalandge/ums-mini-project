import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetComponent } from './forget/forget.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { UnlockComponent } from './unlock/unlock.component';

const routes: Routes = [
{
path:'home',component:HomeComponent
},
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'signin',component:SigninComponent
  },
  {
    path:'forget',component:ForgetComponent
  },
  {
    path:'unlock',component:UnlockComponent
  },
  {
    path:'unlockAcc',component:UnlockComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
