import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LearnComponent } from './learn.component';
import { SvgsModule } from 'src/app/partials/svgs/svgs.module';
import { SectionComponent } from './section/section.component';

const routes: Routes = [
	{
		path: "",
		component: LearnComponent
	},
	{
		path: ":section",
		component: SectionComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [SectionComponent]
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
