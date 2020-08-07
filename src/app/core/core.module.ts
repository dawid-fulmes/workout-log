import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RootStoreModule } from './store/root-store.module';
import { containers, ShellComponent } from './containers';
import { components } from './components';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [...containers, ...components],
  imports: [SharedModule, RootStoreModule, RouterModule],
  exports: [ShellComponent],
})
export class CoreModule {}
