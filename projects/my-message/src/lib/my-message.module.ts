import { NgModule } from '@angular/core';
import { MyMessageComponent } from './my-message.component';
import { HiMessageComponent } from './my-message/hi-message/hi-message.component';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    MyMessageComponent,
    HiMessageComponent
  ],
  imports: [HttpClientModule
  ],
  exports: [
    MyMessageComponent,HiMessageComponent
  ]
})
export class MyMessageModule { }
