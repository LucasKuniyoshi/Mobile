import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export enum SearchType{
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episode',
  game = 'game',
}

@Injectable({
  providedIn: 'root'
})
export class OmdbapiService {
  url = 'http://www.omdbapi.com/';
  apiKey = 'c5d7a1f2' //poderia colocar na cost JSON environment dentro da pasta environment, para manter secreto/seguro

  constructor(private http : HttpClient) { }

  getAll(title : string, type : SearchType) : 
  Observable<any> /*Observable => retorna qualquer coisa sem preciasr determinar o tipo*/
  {
    return this.http.get(`${this.url}?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`);
    // encode => garante q o titulo, independente do que está escrito, n vai quebrar a api
  }

  getById(id: any){
    return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`);
    // & => "barra de espaco" da busca
  }
}
