import { NgModule } from '@angular/core';
import { CurrentBuildComponent } from './my-message/hi-message/current-build-provider.component';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    
    CurrentBuildComponent
  ],
  imports: [HttpClientModule
  ],
  exports: [
    CurrentBuildComponent
  ]
})
export class MyMessageModule { }
