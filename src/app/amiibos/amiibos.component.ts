import { Component, OnInit } from '@angular/core';

import { AmiiboService, AmiiboService } from "../services/amiibo.service";
import { AmiiboInterface } from "../interface/amiibo-interface";

@Component({
  selector: 'app-amiibos',
  templateUrl: './amiibos.component.html',
  styleUrls: ['./amiibos.component.css']
})
export class AmiibosComponent implements OnInit {

  constructor( private amiibo: AmiiboService) { }

  getAmiibos() {
    this.amiibos= this.amiibo.getAmiibos();
  }
setPage(page: number){
  const amiiboCount = this.getAmiibos.length;
  this.paginator = this. paginatorService.getPaginator(amiiboCount, page, itemsOnPage:12);
  if (page < 1 || page > this.paginator.pagesCount){

  }
}
setAmiibos()
  ngOnInit() {
  }

}
