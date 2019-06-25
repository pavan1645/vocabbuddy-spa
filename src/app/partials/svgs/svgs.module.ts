import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgListUl, SvgQuiz, SvgHistory, SvgStopwatch, SvgArrowLeft, SvgMicrophone, SvgChevronUp, SvgNotes, SvgLock, SvgExpand } from './svgs.component';

const components = [ SvgListUl, SvgQuiz, SvgHistory, SvgStopwatch, SvgArrowLeft, SvgMicrophone, SvgChevronUp, SvgNotes, SvgLock, SvgExpand ]

@NgModule({
	declarations: components,
	exports: components,
	imports: [
		CommonModule
	]
})
export class SvgsModule { }
