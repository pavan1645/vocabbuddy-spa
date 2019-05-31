import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SvgsModule } from 'src/app/partials/svgs/svgs.module';

@NgModule({
	declarations: [HomeComponent],
	imports: [
		CommonModule,
		SvgsModule
	]
})
export class HomeModule { }
