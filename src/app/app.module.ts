import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { TravelAgencyComponent } from './components/travel-agency/travel-agency.component';
import { DataScienceComponent } from './components/data-science/data-science.component';
import { ArtificialIntelligenceComponent } from './components/artificial-intelligence/artificial-intelligence.component';
import { TopUpComponent } from './components/top-up/top-up.component';
import { MobilityServiceComponent } from './components/mobility-service/mobility-service.component';
import { CashCollectionComponent } from './components/cash-collection/cash-collection.component';
import { BnNgIdleService } from 'bn-ng-idle';
import { IdlePopupComponent } from './components/idle-popup/idle-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FooterComponent,
    HeaderComponent,
    TravelAgencyComponent,
    DataScienceComponent,
    ArtificialIntelligenceComponent,
    TopUpComponent,
    MobilityServiceComponent,
    CashCollectionComponent,
    IdlePopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BnNgIdleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
