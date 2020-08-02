import { NgModule } from '@angular/core';

import { RootStoreModule } from './store/root-store.module';
import { containers, ShellComponent } from './containers';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [...containers],
  imports: [SharedModule, RootStoreModule],
  exports: [ShellComponent],
})
export class CoreModule {}
