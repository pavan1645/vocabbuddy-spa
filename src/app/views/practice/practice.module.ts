import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PracticeComponent } from './practice.component';
import { Routes, RouterModule } from '@angular/router';
import { SvgsModule } from 'src/app/partials/svgs/svgs.module';
import { SectionComponent } from './section/section.component';
import { SharedModule } from 'src/app/partials/shared/shared.module';


const routes: Routes = [
	{
		path: "",
		component: PracticeComponent,
		data: {animation: "Practice"}
	},
	{
		path: ":section",
		component: SectionComponent,
		data: {animation: "PracticeSection"}
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
		SharedModule,
		SvgsModule,
		CommonModule
	]
})
export class PracticeModule { }
