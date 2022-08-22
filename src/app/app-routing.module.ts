import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionsModule } from './sessions/sessions.module';
import { SharedModule } from './shared/shared.module';


const routes: Routes = [
  {
    path: 'sessions',    
    loadChildren: () =>
      import('./sessions/sessions.module').then((m) => SessionsModule),
  },
  {
    path: 'shared',    
    loadChildren: () =>
      import('./shared/shared.module').then((m) => SharedModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
