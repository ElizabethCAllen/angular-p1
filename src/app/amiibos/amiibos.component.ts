import { Component, OnInit } from '@angular/core';

import { AmiiboService, AmiiboService } from '../services/amiibo.service';
import { AmiiboInterface } from '../interface/amiibo-interface';
import { PaginationService } from '../services/pagination.service';

@Component({
  selector: 'app-amiibos',
  templateUrl: './amiibos.component.html',
  styleUrls: ['./amiibos.component.css']
})
export class AmiibosComponent implements OnInit {

amiibos: AmiiboInterface[];
  paginator: any = {};
  pagedItem: AmiiboInterface[] = [];


  constructor( private amiibo: AmiiboService, private paginationSerive: PaginationService) { }

  getAmiibos() {
    this.amiibos = this.amiibo.getAmiibos();
  }
  setPage(page: number) {
    if (page < 1 || this.paginator.totalPages) { return; }
    const amiiboCount = this.amiibos.length;
    this.paginator = this.paginationSerive.getPaginator( amiiboCount, page, itemsOnPage: 12 );
    const startIndex = this.paginator.startIndex;
    const endIndex = this.paginator.endIndex + 1 ;
    this.pagedItems = this.amiibos.slice(this.paginator.startIndex, endIndex);

  }

  ngOnInit() {
  }

}
