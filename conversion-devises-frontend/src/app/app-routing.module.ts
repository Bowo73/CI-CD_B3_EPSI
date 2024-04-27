import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConversionFormComponent } from './conversion-form/conversion-form.component';


const routes: Routes = [
  { path: '', component: ConversionFormComponent },
  // Other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
