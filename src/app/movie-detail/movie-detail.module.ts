import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MovieDetailPage } from './movie-detail.page';
import { MovieDetailPageRoutingModule } from './movie-detail-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MovieDetailPageRoutingModule
  ],
  declarations: [MovieDetailPage]
})
export class MovieDetailPageModule {}
