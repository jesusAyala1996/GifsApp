import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchboxComponent } from './components/search-box/search-box.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { CardListComponent } from './components/card-list/card-list.component';




@NgModule({
  declarations: [
    HomePageComponent,
    SearchboxComponent,
    CardListComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    HomePageComponent,


  ]
})
export class GifsModule { }
