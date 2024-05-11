import { Component, OnInit, inject } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { CardIcon } from '../../../interfaces/card-icon';
import { CardIconComponent } from '../../components/card-icon/card-icon.component';
import { TableComponent } from '../../components/table/table.component';
import { DashboardService } from '../../../services/dashboard.services';
import { TableColumn } from '../../../interfaces/table-column';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MaterialModule,
    CardIconComponent,
    TableComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent implements OnInit {

  ngOnInit(): void {
    this.setTableColumns();
  }

  public cardList: CardIcon[] = [
    {
      title: '1234',
      subtitle: 'productos',
      icon: 'home'
    },
    {
      title: '2345',
      subtitle: 'productos',
      icon: 'home'
    },
    {
      title: '2347',
      subtitle: 'productos',
      icon: 'home'
    },
    {
      title: '8234',
      subtitle: 'productos',
      icon: 'home'
    },
  ]

  public dashboardService = inject( DashboardService );

  public tableColumns: TableColumn[] = []

  setTableColumns() {
    this.tableColumns = [
      { label: 'Planta', def: 'Planta', dataKey: 'Planta' },
      { label: 'Equipo', def: 'Equipo', dataKey: 'Equipo' },
      { label: 'Centro Constos', def: 'CentroConstos', dataKey: 'CentroConstos' },
      { label: 'Estado', def: 'Estado', dataKey: 'Estado' },
      { label: 'Programacion Mantenimiento',
        def: 'FecProgramacionMantenimiento',
        dataKey: 'FecProgramacionMantenimiento',
        dataType: 'date',
        formatt: 'dd MMM yyyy'
      },
    ]
  }

}
