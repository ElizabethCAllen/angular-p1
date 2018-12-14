import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AmiiboService } from '../services/amiibo.service';
import { AmiiboInterface} from '../interface/amiibo-interface';

@Component({
  selector: 'app-amiibos-detail',
  templateUrl: './amiibos-detail.component.html',
  styleUrls: ['./amiibos-detail.component.css']
})
export class AmiibosDetailComponent implements OnInit {

  amiibo: AmiiboInterface;

  constructor(private amiiboService: AmiiboService, private route: ActivatedRoute) { }

  getAmiiboTail() {
    return this.route.params.subscribe( Params => {
      this.getAmiibo(Params.id);
    });
  }
  getAmiibo(id: string) {
    this.amiiboService.getAmiibo(id).subscribe((amiibo) => {this.amiibo = amiibos.amiibo[0]});
  }
  ngOnInit() {
  this.getAmiiboTail();
  }
}
