import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturedPage } from './featured.page';
import { FeaturedPageRoutingModule } from './featured-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FeaturedPageRoutingModule
  ],
  declarations: [FeaturedPage]
})
export class FeaturedPageModule {}
