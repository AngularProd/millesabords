import { Routes, RouterModule, Route } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
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

const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    
    { path: 'menu/:insertOrList', component: MenuComponent },
    
    { path: 'plat/:insertOrList', component: PlatComponent },
    
    { path: 'ajoutplat', component: AjoutPlatComponent },
    { path: 'deleteplat/:id', component: DeletePlatComponent },
    
    { path: 'ajoutmenu', component: AjoutMenuComponent },
    { path: 'deletemenu/:id', component: DeleteMenuComponent },
    
    { path: 'utilisateur', component: UtilisateurComponent },
    { path: 'ajoututilisateur', component: AjoutUtilisateurComponent },
    
    { path: 'dessert/:insertOrList', component: DesertComponent },
    { path: 'deletedessert/:id', component: DeleteDessertComponent },
    { path: 'ajoutdessert', component: AjoutDessertComponent },
    
    { path: 'boisson/:insertOrList', component: BoissonComponent },
    { path: 'ajoutboisson', component: AjoutBoissonComponent },
    { path: 'deleteboisson/:id', component: DeleteBoissonComponent },
    
    { path: 'vins/:param', component: VinsComponent },
    { path: 'ajoutvins', component: AjoutVinsComponent },
    
    { path: 'platdujour/:param', component: PlatdujourComponent },
    { path: 'ajoutplatdujour', component: AjoutComponent },

    //Pizza
    { path: 'pizza/:insertOrList', component: PizzaComponent },
    { path: 'ajoutpizza', component: AjoutPizzaComponent },
    { path: 'deletepizza/:id', component: DeletePizzaComponent },
];

export const adminRouting = RouterModule.forChild(routes);
