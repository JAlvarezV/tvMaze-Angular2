import { Pipe, PipeTransform } from '@angular/core';
import {isNullOrUndefined} from "util";

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {

  transform(items: any[], args:number): any {
    if(!isNullOrUndefined(items)){
      return items.filter(
        show => show.score>=args
      );
    }
  }

}
