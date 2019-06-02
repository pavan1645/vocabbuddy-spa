import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgListUl, SvgQuiz, SvgHistory, SvgStopwatch, SvgArrowLeft } from './svgs.component';

const components = [ SvgListUl, SvgQuiz, SvgHistory, SvgStopwatch, SvgArrowLeft ]

@NgModule({
	declarations: components,
	exports: components,
	imports: [
		CommonModule
	]
})
export class SvgsModule { }
