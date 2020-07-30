import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootStoreModule } from './store/root-store.module';
import { containers, ShellComponent } from './containers';

@NgModule({
  declarations: [...containers],
  imports: [CommonModule, RootStoreModule],
  exports: [ShellComponent],
})
export class CoreModule {}
