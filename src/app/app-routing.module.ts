import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'movies', //pagina padrão
    pathMatch: 'full'
  },
  {
    path: 'movies',
    loadChildren: () => import('./view/movies/movies.module').then( m => m.MoviesPageModule)
  },
  {
    path: 'movie-details/:id',
    loadChildren: () => import('./view/movie-details/movie-details.module').then( m => m.MovieDetailsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
