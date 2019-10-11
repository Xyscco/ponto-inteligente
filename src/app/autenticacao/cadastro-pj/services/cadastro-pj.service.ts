import { Observable } from 'rxjs/Observable';
import { CadastroPj } from './../models/cadastro-pj.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CadastroPjService {

  private readonly PATH: string = 'cadastrar-pj';

  constructor(private http : HttpClient) { }

  cadastrar(cadastroPj: CadastroPj) : Observable<any> {
    return this.http.post(env.baseApiUrl + this.PATH, cadastroPj);
  }
}
