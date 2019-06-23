import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SvgsModule } from 'src/app/partials/svgs/svgs.module';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/partials/shared/shared.module';

const routes: Routes = [
	{
		path: "",
		component: HomeComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

@NgModule({
	declarations: [HomeComponent],
	imports: [
		CommonModule,
		SharedModule,
		SvgsModule,
		HomeRoutingModule
	]
})
export class HomeModule { }
