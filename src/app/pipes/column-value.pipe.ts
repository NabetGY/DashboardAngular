import { Pipe, PipeTransform } from '@angular/core';
import { TableColumn } from '../interfaces/table-column';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'columnValue',
  standalone: true
})
export class ColumnValuePipe implements PipeTransform {

  transform(row: any, column: TableColumn): unknown {

    let displayValue = row[column.dataKey];

    switch (column.dataType) {
      case 'date':
        if ( column.formatt !== undefined ) {
          displayValue = new DatePipe('en').transform(displayValue, column.formatt);
        }

        break;

      default:
        break;
    }

    return displayValue;
  }

}
