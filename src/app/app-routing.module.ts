import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full'
  },
  {
    path: 'movies',
    children: [
      {
        path: "",
        loadChildren: () => import('./movies/movies.module').then( m => m.MoviesPageModule)
      },
      {
        path: ":IdMovie",
        loadChildren: () => import('./movies/movie-details/movie-details.module').then( m => m.MovieDetailsPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
