import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'base64',
  pure: true
})
export class Base64Pipe implements PipeTransform {
  transform(data: string, args?: any): any {
    return window.atob(data);
  }
}