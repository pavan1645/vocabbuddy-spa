import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgListUl, SvgQuiz, SvgHistory, SvgStopwatch, SvgArrowLeft, SvgMicrophone, SvgChevronUp, SvgNotes, SvgLock, SvgExpand, SvgSwipe, SvgTouch, SvgQuestion } from './svgs.component';

const components = [ SvgListUl, SvgQuiz, SvgHistory, SvgStopwatch, SvgArrowLeft, SvgMicrophone, SvgChevronUp, SvgNotes, SvgLock, SvgExpand, SvgSwipe, SvgTouch, SvgQuestion ]

@NgModule({
	declarations: components,
	exports: components,
	imports: [
		CommonModule
	]
})
export class SvgsModule { }
