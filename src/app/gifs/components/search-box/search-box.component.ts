import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

//#txtTaginput = referencia local a la etiqueta solo para el template
//Se puede acceder al valor del input mediante esta
//(key.) evento para el form
@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar!</h5>
    <input
      type="text"
      class="form-control"
      placeholder="Buscar gifs.."
      (keyup.enter)="searchTag()"
      #txtTaginput
    />
  `,
})
export class SearchboxComponent {
  //ViewChild enlazada el resultado del componente mediante el selector
  //tagInput! = !not null operator le dice al elemento que siempre va recibir una netrada
  @ViewChild('txtTaginput')
  public tagInput!: ElementRef<HTMLInputElement>;

  //se inyecta el servicio en el constructor
  constructor(private gifsService: GifsService) {}

  searchTag() {
    //this.tagInput.nativeElement.value accede al valor del tagInput
    const newTag = this.tagInput.nativeElement.value;
    this.gifsService.searchTag(newTag);
    //limpia la caja de texto
    this.tagInput.nativeElement.value = '';


  }
}
