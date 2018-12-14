import { Component, OnInit } from '@angular/core';
import { AmiiboService } from '../services/amiibo.service';

@Component({
  selector: 'app-amiibos-detail',
  templateUrl: './amiibos-detail.component.html',
  styleUrls: ['./amiibos-detail.component.css']
})
export class AmiibosDetailComponent implements OnInit {

  amiibo: AmiiboInterface;

  constructor(private amiiboService: AmiiboService, private route: ActivatedRoute) { }

  getAmiiboTail(){
    return this.route.params.subscribe(next: Params=>{
      this.getAmiiboTail(patrams.id);
    });
  }

  getAmiibo(id: string){
    this.amiiboService.getAmiibo(id).subscribe( next(amiibo)=> {this.amiibo = amiibo.amiibo[0]});
  }



  
  ngOnInit() {
  this.getAmiiboTail();
  
  }


}
