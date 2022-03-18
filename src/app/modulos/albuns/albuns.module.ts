import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbunsRoutingModule } from './albuns-routing.module';
import { AlbumComponent } from './pages/album/album.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [AlbumComponent],
  imports: [
    CommonModule,
    AlbunsRoutingModule,
    SharedModule
  ]
})
export class AlbunsModule { }
