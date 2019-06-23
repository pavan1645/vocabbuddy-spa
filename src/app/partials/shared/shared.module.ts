import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WaveDirective } from './wave.directive';

@NgModule({
  declarations: [WaveDirective],
  imports: [
    CommonModule
  ],
  exports: [WaveDirective]
})
export class SharedModule { }
