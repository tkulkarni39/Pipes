import { Pipe, PipeTransform } from '@angular/core';

// We create pipe using pipe decorator
@Pipe({// By this decorator we tell angular that it is pipe
  name: 'customPipe'
})
// pipe class is decorated with pipe metadata
export class CustomPipePipe implements PipeTransform { // Pipe transform is an interface which implements transform method

  transform(value: number, exponent: string): number {
    const exp = parseFloat(exponent);
    return Math.pow(value, isNaN(exp) ? 1 : exp);
  }

  // logic of pipe is put into transform function

}
