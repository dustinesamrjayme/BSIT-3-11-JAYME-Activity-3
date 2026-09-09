import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MePage } from './me.page';
import { MePageRoutingModule } from './me-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    MePageRoutingModule
  ],
  declarations: [MePage]
})
export class MePageModule {}
