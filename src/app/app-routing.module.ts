import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyrepoComponent } from './myrepo/myrepo.component'
import { PublicrepoComponent } from './publicrepo/publicrepo.component'

const routes: Routes = [
  {path:"myrepo", component:MyrepoComponent},
  {path:"publicrepo", component:PublicrepoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [MyrepoComponent, PublicrepoComponent]
