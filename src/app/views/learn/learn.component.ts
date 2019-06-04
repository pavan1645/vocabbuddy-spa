import { Component, OnInit } from '@angular/core';
import { Globals } from 'src/app/globals.js';

let progress = new Globals().progress;

@Component({
	selector: 'app-learn',
	templateUrl: './learn.component.html',
	styleUrls: ['./learn.component.scss']
})
export class LearnComponent implements OnInit {
	private sections: any[] = progress;
	
	constructor() { }
	
	ngOnInit() {
		this.sections.forEach(s => {
			s["remainingWords"] = s.words.filter(f => f.isRemembered < 2).length;
		});
	}
	
}
