import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './component/movies/movies.component';
import { DetalleComponent } from './component/detalle/detalle.component';


const routes: Routes = [
  {path: 'movies', component : MoviesComponent},
  {path: 'movie/:id', component : DetalleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
