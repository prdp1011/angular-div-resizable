import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ChatWindowComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [ChatWindowComponent],
  bootstrap: [ChatWindowComponent]
})
export class AppModule { }
