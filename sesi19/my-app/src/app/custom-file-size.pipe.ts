import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customFileSize'
})
export class CustomFileSizePipe implements PipeTransform {

  transform(size: number, extension: string="MB"): string {
    switch(extension){
      case("KB"):
        return (size/1024).toFixed(2) + extension;
      case("MB"):
        return (size/1024/1024).toFixed(2) + extension;
      case("GB"):
        return (size/1024/1024/1024).toFixed(2) + extension;

      default:
        break;
    }
    return "";
  }

}
