
import {PipeTransform,Pipe} from '@angular/core'

@Pipe({
    name:'shortInfo'
})


export class InfoPipe implements PipeTransform{

    transform(value: any) {
        let info:string = value+'';
         return info.substring(0,300)+'...';
 
     }
}
