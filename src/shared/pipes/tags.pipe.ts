import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tagPipe'
})
export class TagPipe {
  transform(t) { return t.split(',').slice(0, 10).map(x => '#' + x.toLowerCase().replace(/ /g,'-')).join(' ') }
}
