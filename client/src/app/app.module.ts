import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RulesComponent } from './components/rules/rules.component';
import { StructureComponent } from './components/structure/structure.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { OfficialsComponent } from './components/officials/officials.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutModule } from '@angular/cdk/layout';

import { StructureService } from './services/structure.service';
import { OfficialsService } from './services/officials.service';
import { RulesService } from './services/rules.service';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu'
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    RulesComponent,
    StructureComponent,
    ErrorComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    OfficialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    CommonModule
  ],
  providers: [StructureService, OfficialsService, RulesService],
  bootstrap: [AppComponent]
})

export class AppModule { }
