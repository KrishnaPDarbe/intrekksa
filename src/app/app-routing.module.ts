import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataScienceComponent } from './components/data-science/data-science.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { TravelAgencyComponent } from './components/travel-agency/travel-agency.component';

const routes: Routes = [
  {
    path:'',
    component:HomePageComponent
  },
  {
    path: 'travelAgency',
    component: TravelAgencyComponent,
  },
  {
    path: 'dataScience',
    component: DataScienceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
