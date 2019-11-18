import { Routes } from '@angular/router';
import { GeneralComponent } from 'src/app/components/wizard/steps/general.component';
import { BudgetComponent } from 'src/app/components/wizard/steps/budget.component';
import { FinalComponent } from 'src/app/components/wizard/steps/final.component';
import { StepsComponent } from 'src/app/components/wizard/steps/steps.component';

export const STEPS : Routes = [
    { 
        path: 'new', 
        component: StepsComponent,
        children:[
            { path: 'general', component: GeneralComponent },
            { path: 'budget', component: BudgetComponent },
            { path: 'final', component: FinalComponent },
        ] 
    },
]
