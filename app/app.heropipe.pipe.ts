import { Pipe, PipeTransform, Injectable } from '@angular/core';

//import { enableProdMode } from "@angular/core";
//// Disabled Developed mode
//enableProdMode();

@Pipe({
  name: 'herosort',
  // use unpure mode to update list
  pure: false
})

@Injectable()
export class HeroPipe implements PipeTransform {
  transform( array: any[], args: string): any[]{
    if(!Array.isArray(array)){
      return array;
    }

    return array.sort(
          (a,b)=>{
            return ((a.favorite && b.favorite) ||
                    (!a.favorite && !b.favorite)) ? 0 : (a.favorite && !b.favorite) ? -1 : 1;
          }) ;

  }

}
