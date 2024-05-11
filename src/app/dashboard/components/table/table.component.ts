import { Component, Input, ViewChild } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MPP1 } from '../../../interfaces/mpp1';
import { TableColumn } from '../../../interfaces/table-column';
import { ColumnValuePipe } from '../../../pipes/column-value.pipe';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'dashboard-table',
  standalone: true,
  imports: [
    MaterialModule,
    ColumnValuePipe
  ],
  templateUrl: './table.component.html',
  styles: `{ table {
    width: 100%;
  }}`
})
export class TableComponent {


  public dataSource: MatTableDataSource<Array<any>> = new MatTableDataSource();
  public tableColumns: TableColumn[] = []
  public displayedColumns: string[] = [];


  @Input() set data(data: Array<any>) {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
  }

  @Input() set columns(columns: TableColumn[]) {
    this.tableColumns = columns;
    this.displayedColumns = this.tableColumns.map( col => col.def );
  }


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
