import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsComponent } from './components/wizard/tabs/tabs.component';
import { StepsComponent } from './components/wizard/steps/steps.component';
import { GeneralComponent } from './components/wizard/steps/general.component';
import { BudgetComponent } from './components/wizard/steps/budget.component';
import { FinalComponent } from './components/wizard/steps/final.component';

import { AppComponent } from './app.component';
import { WizardComponent } from './components/wizard/wizard.component';
import { STEPS } from './routes/RFS/steps.routes';


const routes: Routes = [
  { 
    path: 'home', 
    component: AppComponent,

  },
  {
    path: 'wizard', 
    component: WizardComponent,
    children: STEPS
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  declarations:[WizardComponent,
    TabsComponent,
    StepsComponent,
    GeneralComponent,
    BudgetComponent,
    FinalComponent],
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
