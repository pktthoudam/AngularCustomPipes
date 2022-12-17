import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'areaOfRectange' })
export class AreaOfRectangle implements PipeTransform {
    transform(value: number, ...args: number[]): number {
        var length = value;
        var breadth = args[0];
        return (length * breadth)
    }
}
