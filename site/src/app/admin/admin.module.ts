import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouterModule, Router, Routes } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { NgxSmartModalModule, NgxSmartModalService } from 'ngx-smart-modal';

import { DashboardComponent } from './dashboard/dashboard.component';
import { adminRouting } from './admin.routing';
import { MenuComponent } from './menu/menu.component';
import { PlatComponent } from './plat/plat.component';
import { AjoutPlatComponent } from './plat/ajout/ajout.component';
import { AjoutMenuComponent } from './menu/ajout/ajout.component';
import { DeletePlatComponent } from './plat/delete/delete.component';
import { DeleteMenuComponent } from './menu/delete/delete.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { AjoutUtilisateurComponent } from './utilisateur/ajout/ajout.component';
import { DesertComponent } from './desert/desert.component';
import { DeleteDessertComponent } from './desert/delete/delete.component';
import { AjoutDessertComponent } from './desert/ajout/ajout.component';
import { BoissonComponent } from './boisson/boisson.component';
import { AjoutBoissonComponent } from './boisson/ajout/ajout.component';
import { DeleteBoissonComponent } from './boisson/delete/delete.component';
import { VinsComponent } from './vins/vins.component';
import { AjoutVinsComponent } from './vins/ajout/ajout.component';
import { PlatdujourComponent } from './platdujour/platdujour.component';
import { AjoutComponent } from './platdujour/ajout/ajout.component';
import { PizzaComponent } from './pizza/pizza.component';
import { AjoutPizzaComponent } from './pizza/ajout/ajout.component';
import { DeletePizzaComponent } from './pizza/delete/delete.component';
// import { RegisterComponent } from './register/register.component';
// import { AlertComponent } from '../_directives/alert/alert.component';
// import { LoginComponent } from './login/login.component';


@NgModule({
  imports: [
    CommonModule,
    adminRouting,
    FormsModule,
    HttpModule,
    NgxSmartModalModule.forRoot(),
    // AlertComponent
  ],
  declarations: [
    DashboardComponent,
    MenuComponent,
    PlatComponent,
    AjoutPlatComponent,
    AjoutMenuComponent,
    DeletePlatComponent,
    DeleteMenuComponent,
    UtilisateurComponent,
    AjoutUtilisateurComponent,
    DesertComponent,
    DeleteDessertComponent,
    AjoutDessertComponent,
    BoissonComponent,
    AjoutBoissonComponent,
    DeleteBoissonComponent,
    VinsComponent,
    AjoutVinsComponent,
    PlatdujourComponent,
    AjoutComponent,
    PizzaComponent,
    AjoutPizzaComponent,
    DeletePizzaComponent
    // AjoutPlatdujourComponent,
    // RegisterComponent,
    // LoginComponent
  ],
  providers: [
    HttpClientModule,
    NgxSmartModalService
  ]
})
export class AdminModule { }
