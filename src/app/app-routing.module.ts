import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesModule } from './pages/pages.module';
import { SessionsModule } from './sessions/sessions.module';
import { SharedModule } from './shared/shared.module';


const routes: Routes = [
  {
    path: 'shared',    
    loadChildren: () =>
      import('./shared/shared.module').then((m) => SharedModule),
  },
  {
    path: 'sessions',    
    loadChildren: () =>
      import('./sessions/sessions.module').then((m) => SessionsModule),
  },
  {
    path: 'pages',    
    loadChildren: () =>
      import('./pages/pages.module').then((m) => PagesModule),
  },
  { path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'IPE', loadChildren: () => import('./pages/ipe/ipe.module').then(m => m.IPEModule) },
  { path: 'operationalTools', loadChildren: () => import('./pages/operational-tools/operational-tools.module').then(m => m.OperationalToolsModule) },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
