import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.css'],
})
export class LazyImageComponent implements OnInit {
  @Input()
  public url!: string;

  @Input()
  public alt: string = '';

  public hasLoaded: boolean = false;

  ngOnInit(): void {
    if (!this.url) throw new Error('Url property is requierd');
  }

  onLoad() {
    this.hasLoaded = true;
  }

  /* timer de 1 segundo para cargar las imagenes
  setTimeout (()=>{

  }, 1000)
  */
}
