import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReporteComponent } from './Reporte.component';

const routes: Routes = [
  {
    path: '',
    component: ReporteComponent,
    data: {
      title: 'Reporte',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReporteRoutingModule {}

