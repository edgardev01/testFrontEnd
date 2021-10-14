import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PreciosComponent } from './pages/precios/precios.component';
import { CallbackComponent } from './pages/callback/callback.component';
import { AuthGuard } from './services/auth.guard';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'color', component: PreciosComponent, canActivate: [AuthGuard] },
  { path: 'callback', component: CallbackComponent },
  { path: 'pais', component: PorPaisComponent, canActivate: [AuthGuard] },
  { path: 'region', component: PorRegionComponent, canActivate: [AuthGuard] },
  { path: 'capital', component: PorCapitalComponent, canActivate: [AuthGuard] },
  { path: 'pais/:id', component: VerPaisComponent, canActivate: [AuthGuard] },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
