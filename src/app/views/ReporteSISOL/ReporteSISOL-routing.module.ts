import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReporteSISOLComponent } from './ReporteSISOL.component';

const routes: Routes = [
  {
    path: '',
    component: ReporteSISOLComponent,
    data: {
      title: $localize`ReporteSISOL`
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReporteSISOLRoutingModule {
}
