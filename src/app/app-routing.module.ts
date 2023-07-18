import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpartitiComponent } from './spartiti/spartiti.component';
import { StrumentiComponent } from './strumenti/strumenti.component';
import { BenvenutoComponent } from './benvenuto/benvenuto.component';

const routes: Routes = [
  { path: 'spartiti', component: SpartitiComponent},
  { path: 'strumenti', component: StrumentiComponent},
  { path: 'benvenuto', component: BenvenutoComponent},
  { path: '', redirectTo: '/benvenuto', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
