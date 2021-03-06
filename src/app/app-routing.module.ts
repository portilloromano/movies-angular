import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { HomeComponent } from './components/home/home.component';
import { ActorDetailComponent } from './components/actor-detail/actor-detail.component';
import { MoviesSearchComponent } from './components/movies-search/movies-search.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies/:category', component: MoviesComponent },
  { path: 'movie/:id', component: MovieDetailComponent },
  { path: 'actor/:id', component: ActorDetailComponent },
  { path: 'movies-search/:query', component: MoviesSearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
