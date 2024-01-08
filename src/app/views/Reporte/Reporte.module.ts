import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BadgeModule, CardModule, GridModule } from '@coreui/angular';
import { ChartjsModule } from '@coreui/angular-chartjs';

import { ReporteComponent } from './Reporte.component';
import { ReporteRoutingModule } from './Reporte-routing.module';
import { DocsComponentsModule } from '@docs-components/docs-components.module';

@NgModule({
  declarations: [ReporteComponent],
  imports: [
    CommonModule,
    ReporteRoutingModule,
    ChartjsModule,
    CardModule,
    GridModule,
    BadgeModule,
    DocsComponentsModule
  ]
})
export class ReporteModule {
}
