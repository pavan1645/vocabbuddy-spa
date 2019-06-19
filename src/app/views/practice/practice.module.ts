import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PracticeComponent } from './practice.component';
import { Routes, RouterModule } from '@angular/router';
import { SvgsModule } from 'src/app/partials/svgs/svgs.module';
import { SectionComponent } from './section/section.component';


const routes: Routes = [
	{
		path: "",
		component: PracticeComponent
	},
	{
		path: ":section",
		component: SectionComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PracticeRoutingModule { }


@NgModule({
	declarations: [PracticeComponent, SectionComponent],
	imports: [
		PracticeRoutingModule,
		SvgsModule,
		CommonModule
	]
})
export class PracticeModule { }
