import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../interface/gifs.interface';

//llave de api

@Injectable({ providedIn: 'root' })
export class GifsService {


  public gifList:Gif[]=[]

  private _tagHistory: string[] = [];
  private apiKey: string = '7dE4U7dRRMokaAn2OCKcby9E5um6UtYu';
  private serviceUrl :string = "https://api.giphy.com/v1/gifs"

  //inteccion servicio http HttpClient
  constructor(private http: HttpClient) {}

  get tagHistory() {
    //retorna array con los elementos buscados
    return [...this._tagHistory];
  }

  private organizeHistory(tag: string) {
    //tranformar string a minusculas
    tag = tag.toLowerCase();
    //condicional evaluado sobre el array de tags
    if (this._tagHistory.includes(tag)) {
      //si el oldTag no es diferente al tag nuevo ingresado, el filter lo retorna en el array de lo contrario lo elimina
      this._tagHistory = this._tagHistory.filter((oldTag) => oldTag !== tag);
    }
    //unshift ubica al principio del array el tag nuevo ingresado
    this._tagHistory.unshift(tag);
    //splice limita el tamaño maximo del array (de 10 posiciones)
    this._tagHistory = this._tagHistory.splice(0, 10);
  }
  searchTag(tag: string): void {
    //si el usuario no escribe nada en el input, no retorna nada
    if (tag.length === 0) return;
    //llamado al metodo organizeHistory
    this.organizeHistory(tag);

//constante con el url de la api renombrado y los atributos de limite y tag
    const params = new HttpParams()
    .set("api_key", this.apiKey)
    .set("limit", "10")
    .set("q", tag)


    //.subscribe es un observable = un objeto el cual puede emitir valroes a lo largo del tiempo, escuchar las emisiones que emita
    //get recibe el objeto params que tiene el url de la api renombrado
    //get de tipo generico SearchResponse
    this.http.get<SearchResponse>(
      `${this.serviceUrl}/search?`,{params}).subscribe
      (resp =>{
      this.gifList = resp.data

    })

    //url de la api
    //("https://api.giphy.com/v1/gifs/search?api_key=7dE4U7dRRMokaAn2OCKcby9E5um6UtYu&q=valorant&limit=10")
  }
}
