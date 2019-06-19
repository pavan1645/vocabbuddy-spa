import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PracticeComponent } from './practice.component';
import { Routes, RouterModule } from '@angular/router';
import { SvgsModule } from 'src/app/partials/svgs/svgs.module';


const routes: Routes = [
	{
		path: "",
		component: PracticeComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PracticeRoutingModule { }


@NgModule({
	declarations: [PracticeComponent],
	imports: [
		PracticeRoutingModule,
		SvgsModule,
		CommonModule
	]
})
export class PracticeModule { }
