import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LearnComponent } from './learn.component';
import { SvgsModule } from 'src/app/partials/svgs/svgs.module';

const routes: Routes = [
	{
		path: "",
		component: LearnComponent
	},
	{
		path: ":section",
		component: LearnComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearnRoutingModule { }


@NgModule({
  declarations: [LearnComponent],
  imports: [
    CommonModule,
	LearnRoutingModule,
	SvgsModule
  ]
})
export class LearnModule { }
