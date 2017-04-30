import { Injectable, Pipe } from '@angular/core';

@Pipe({
  name: 'filterusers'
})
@Injectable()
export class FilterUsers {
  
  transform(items: any[], args: string):any {
    if(args === null || args === undefined || args === ""){
     return [];
    }
    return items.filter(item => {
      return item.username === args || (item.skills.indexOf(args) > -1);
    });
  }
}