import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interface/gifs.interface';

//Componente para recibir los gifs
@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {
  //Recibe Data Gif de la interfaz SearchResponse
  @Input()
  public gif!: Gif;

  //exepcion si no se recibe un gif
  ngOnInit(): void {
    if (!this.gif) throw new Error('gif property is required');
  }
}
