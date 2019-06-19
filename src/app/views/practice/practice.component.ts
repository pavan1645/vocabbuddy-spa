import { Component, OnInit } from '@angular/core';
import { Globals } from 'src/app/globals.js';

let progress = new Globals().progress;

@Component({
	selector: 'app-practice',
	templateUrl: './practice.component.html',
	styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit {
	
	sections: any[] = progress;
	
	constructor() { }
	
	ngOnInit() {
		this.sections.forEach((s, i) => {
			let index = s.words.findIndex(w => w.isRemembered == 0);
			if (index > -1) s["isLocked"] = 1;
		})
	}

	navigateTest(i: number) {
		console.log(i);
		
	}
	
}
