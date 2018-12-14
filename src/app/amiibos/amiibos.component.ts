import { ActivatedRoute} from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AmiiboService} from '../services/amiibo.service';
import { AmiiboInterface } from '../interface/amiibo-interface';
import { PaginatorService } from '../services/pagination.service';
@Component({
  selector: 'app-amiibos',
  templateUrl: './amiibos.component.html',
  styleUrls: ['./amiibos.component.css']
})
export class AmiibosComponent implements OnInit {

  constructor( private amiibo: AmiiboService) { }

  getAmiibos() {
    this.router.params. subscribe( next: params =>{
      this.amiiboSerive.getiFilteredAmiibos(params.categry, params.value).subscribe(next: (amiibos) => {
        this.amiibos = amiibos.amiibo;
        this.setPage(1);
      });
    } else{
      this.amiiboSerive.getAmiibos().subscribe(next: (amiibos) => {
        this.amiibos = amiibos.amiibo;
        this.setPage(1);
      });
    }
    );
    // this.amiibos= this.amiibo.getAmiibos();
  }
setPage(page: number) {
  const amiiboCount = this.getAmiibos.length;
  this.paginator = this. paginatorService.getPaginator(amiiboCount, page, itemsOnPage:12);
  if (page < 1 || page > this.paginator.pagesCount){

  }
}
setAmiibos()
  ngOnInit() {
  }

}
