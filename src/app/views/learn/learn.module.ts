import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { LearnComponent } from './learn.component';
import { SvgsModule } from 'src/app/partials/svgs/svgs.module';
import { SectionComponent } from './section/section.component';
import { SharedModule } from 'src/app/partials/shared/shared.module';

const components = [ LearnComponent, SectionComponent ];

const routes: Routes = [
	{
		path: "",
		component: LearnComponent,
		data: {animation: "Learn"}
	},
	{
		path: ":section",
		component: SectionComponent,
		data: {animation: "LearnSection"}
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
	SharedModule,
	LearnRoutingModule,
	FormsModule,
	SvgsModule
  ]
})
export class LearnModule { }
