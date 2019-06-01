import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	private activeBtn = -1;

	constructor(private router: Router) { }
	
	ngOnInit() {
	}
	
	loadComponent(n: number) {
		this.activeBtn = n;
		setTimeout(() => {
			if (this.activeBtn == 0) this.router.navigateByUrl("/learn");
			if (this.activeBtn == 1) this.router.navigateByUrl("/practice");
		}, 500);
	}

}
