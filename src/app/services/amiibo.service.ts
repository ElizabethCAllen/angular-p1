import { Injectable } from '@angular/core';
import { AmiiboInterface } from '../interface/amiibo-interface';
import { ApiService } from "./api.service";
@Injectable({
  providedIn: 'root'
})
export class AmiiboService {

  constructor(private api: ApiService) { }

  getAmiibos(): Subscription  {
    return this.api.get<Amiibointerface[]>('/amiibo').subscribe(next: (res) => res.amiibos);
  }
}
  getAmiibo(id: string){
    return.this.api.get(`/amiibo/?tail=${id}`);
  }

  getFilteredAmiibs(category: string, value: string){
    return.this.api.get(`/amiibos/?{category}=${value}`);
  }