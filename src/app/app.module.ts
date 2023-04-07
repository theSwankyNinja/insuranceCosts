import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavListComponent } from './nav-list/nav-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { AddRxComponent } from './add-rx/add-rx.component';
import { StepperICComponent } from './stepper-ic/stepper-ic.component';
import { MatStepperModule } from '@angular/material/stepper';

@NgModule({
  declarations: [
    AppComponent,
    NavListComponent,
    TopBarComponent,
    AddDoctorComponent,
    AddRxComponent,
    StepperICComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
