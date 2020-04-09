import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { DefaultComponent } from './default/default.component';
import { MapComponent } from './pages/map/map.component';
import { ChartsComponent } from './pages/charts/charts.component';
import { StatisticComponent } from './pages/statistic/statistic.component';

import { MarkersService } from './pages/map/services/markers.service';
import { PopUpService } from './pages/map/services/pop-up.service';

import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { BarchartComponent } from './pages/charts/barchart/barchart.component';
import { PiechartComponent } from './pages/charts/piechart/piechart.component';
import { LinechartComponent } from './pages/charts/linechart/linechart.component';
import { StatisticService } from '../services/statistic.service';
import { ChartsService } from '../services/charts.service';
// import { MatPaginatorModule } from '@angular/material/paginator';
// import {MatTableModule} from '@angular/material/table';
// import { MatTableDataSource } from '@angular/material/table';
// import { MatPaginator } from '@angular/material/paginator';


@NgModule({
  declarations: [
    DefaultComponent,
    MapComponent,
    ChartsComponent,
    StatisticComponent,
    BarchartComponent,
    PiechartComponent,
    LinechartComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
    FlexLayoutModule,
    RouterModule,
    HttpClientModule,
    MDBBootstrapModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
    // MatTableDataSource,
    // MatPaginator,
    // MatTableModule,
    // MatPaginatorModule
  ],
  providers: [
    MarkersService,
    PopUpService,
    StatisticService,
    ChartsService
  ]
})
export class LayersModule { }
