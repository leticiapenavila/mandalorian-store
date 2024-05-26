import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EquipmentType } from 'src/app/types/equipment.type'; 

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private readonly _URL = 'http://seu-endereco-api'; 

  constructor(private _http: HttpClient) {}

  public getListaEquipamento(filtroNome: string = ''): Observable<EquipmentType[]> {
    const nome = filtroNome.trim();
    const options = nome ? { params: new HttpParams().set('search', nome) } : {};
    return this._http.get<EquipmentType[]>(`${this._URL}/equipments`, options);
  }

  public getEquipamento(id:string): any{
    return this._http.get<EquipmentType>(`${this._URL}/equipments/${id}`)
  }
}
