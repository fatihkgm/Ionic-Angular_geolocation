import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserPlacePageRoutingModule } from './user-place-routing.module';

import { UserPlacePage } from './user-place.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserPlacePageRoutingModule
  ],
  declarations: [UserPlacePage]
})
export class UserPlacePageModule {}
