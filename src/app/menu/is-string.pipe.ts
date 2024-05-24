import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  standalone: true,
  name: "isString",
})
export class IsStringPipe implements PipeTransform {
  transform(value: any): value is string {
    return typeof value === "string";
  }
}
