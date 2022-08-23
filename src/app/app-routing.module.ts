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

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
