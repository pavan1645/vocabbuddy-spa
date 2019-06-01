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
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
