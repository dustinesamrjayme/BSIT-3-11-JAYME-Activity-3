import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturedPage } from './featured.page';

const routes: Routes = [
  {
    path: '',
    component: FeaturedPage
  },
  {
    path: 'movie-detail/:id',
    loadChildren: () => import('../movie-detail/movie-detail.module').then(m => m.MovieDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturedPageRoutingModule {}
