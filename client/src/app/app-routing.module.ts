import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { RulesComponent } from './components/rules/rules.component';
import { StructureComponent } from './components/structure/structure.component';
import { OfficialsComponent } from './components/officialTypes/officials.component';
import { OfficialInstancesComponent } from './components/official-instances/official-instances.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'docs/structure', component: StructureComponent },
  { path: 'docs/officialTypes', component: OfficialsComponent },
  { path: 'docs/officials', component: OfficialInstancesComponent },
  { path: 'docs/rules', component: RulesComponent },

  { path: '**', pathMatch: 'full', component: ErrorComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

