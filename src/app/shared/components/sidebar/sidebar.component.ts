import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  //selector para lanzar componente en el html
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  //inyectar el servicio
  constructor(private gifsService: GifsService) {}

  get tags(): string [] {
    return this.gifsService.tagHistory;
  }

  //metodo para disparar la busqueda al ahcer click en el historial
  searchTag (tag:string){
    this.gifsService.searchTag(tag)  }


}
