import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: "",
		loadChildren: () => import("./views/home/home.module").then(mod => mod.HomeModule)
	},
	{
		path: "learn",
		loadChildren: () => import("./views/learn/learn.module").then(mod => mod.LearnModule)
	},
	{
		path: "practice",
		loadChildren: () => import("./views/practice/practice.module").then(mod => mod.PracticeModule)
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
