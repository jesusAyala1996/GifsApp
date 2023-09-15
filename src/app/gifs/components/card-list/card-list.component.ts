import { Component, Input } from '@angular/core';
import { Gif } from '../../interface/gifs.interface';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',

})
export class CardListComponent {

  @Input()
  //el componente gif-card-list recibe un array de gifs de tipo Gif
  public gifs:Gif[] = []


}
