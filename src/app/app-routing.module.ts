import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtificialIntelligenceComponent } from './components/artificial-intelligence/artificial-intelligence.component';
import { CashCollectionComponent } from './components/cash-collection/cash-collection.component';
import { DataScienceComponent } from './components/data-science/data-science.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MobilityServiceComponent } from './components/mobility-service/mobility-service.component';
import { TopUpComponent } from './components/top-up/top-up.component';
import { TravelAgencyComponent } from './components/travel-agency/travel-agency.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'intrekksa',
    component: HomePageComponent,
  },
  {
    path: 'intrekksa/travelAgency',
    component: TravelAgencyComponent,
  },
  {
    path: 'travelAgency',
    component: TravelAgencyComponent,
  },
  {
    path: 'intrekksa/artificialIntelligence',
    component: ArtificialIntelligenceComponent,
  },
  {
    path: 'artificialIntelligence',
    component: ArtificialIntelligenceComponent,
  },
  {
    path: 'intrekksa/mobilityService',
    component: MobilityServiceComponent,
  },
  {
    path: 'mobilityService',
    component: MobilityServiceComponent,
  },
  {
    path: 'intrekksa/cashCollection',
    component: CashCollectionComponent,
  },
  {
    path: 'cashCollection',
    component: CashCollectionComponent,
  },
  {
    path: 'intrekksa/topUp',
    component: TopUpComponent,
  },
  {
    path: 'topUp',
    component: TopUpComponent,
  },
  {
    path: 'dataScience',
    component: DataScienceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
