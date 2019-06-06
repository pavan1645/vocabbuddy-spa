import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LearnComponent } from './learn.component';
import { SvgsModule } from 'src/app/partials/svgs/svgs.module';
import { SectionComponent } from './section/section.component';

const components = [ LearnComponent, SectionComponent ];

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
  exports: [RouterModule]
})
export class LearnRoutingModule { }


@NgModule({
  declarations: components,
  imports: [
    CommonModule,
	LearnRoutingModule,
	SvgsModule
  ]
})
export class LearnModule { }
