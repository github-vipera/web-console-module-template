import { NgModule } from '@angular/core';
import { DemoModuleComponent } from './demo-module.component';

@NgModule({
  imports: [
  ],
  entryComponents:[DemoModuleComponent],
  declarations: [DemoModuleComponent],
  exports: [DemoModuleComponent]
})
export class DemoModuleModule { }
