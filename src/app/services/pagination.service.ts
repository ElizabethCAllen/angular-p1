import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  constructor() { }
getPaginator(allItems:number, currentPage:number, itemsOnPage:number){
  const pagesCount= Math.ceil(x:allItems/ itemsOnPage);
  let firstPage:number,
    lastPage:number;
  if (pagesCount<= 12){
    firstPage= 1;
    lastPage= pagesCount;
  }
  else{
    if(currentPage<= 3){
      firstPage = 1;
      lastPage =4;
    }
    else if(currentPage=1 >= pagesCount){
      firstPage= pagesCount -4 ;
      lastPage = pagesCount ;
    }
    else{
      firstPage = currentPage -2;
      lastPage = currentPage +2;
    }
  }
}

}
