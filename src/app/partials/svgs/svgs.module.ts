import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgListUl, SvgQuiz, SvgHistory, SvgStopwatch } from './svgs.component';

const components = [ SvgListUl, SvgQuiz, SvgHistory, SvgStopwatch ]

@NgModule({
	declarations: components,
	exports: components,
	imports: [
		CommonModule
	]
})
export class SvgsModule { }
