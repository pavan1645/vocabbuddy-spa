import { Component, OnInit } from '@angular/core';
import { Globals } from 'src/app/globals.js';

let progress = new Globals().progress;

@Component({
	selector: 'app-learn',
	templateUrl: './learn.component.html',
	styleUrls: ['./learn.component.scss']
})
export class LearnComponent implements OnInit {
	private sections: any[] = JSON.parse(JSON.stringify(progress));
	
	constructor() { }
	
	ngOnInit() {
		this.sections.forEach(s => {
			s["remainingWords"] = s.words.filter(f => f.isRemembered < 2).length;
			
			s["state"] = 0;																			// not started
			if (s["remainingWords"] > 0 && s["remainingWords"] < s.words.length) s["state"] = 1;	// started
			if (s["remainingWords"] == 0) s["state"] = 2;											// completed

			const percent: number = ((s["words"].length - s["remainingWords"]) / s["words"].length) * 100;

			let completeClass: string = "grey";
			if (percent > 0 && percent <= 25) completeClass = "red";  
			if (percent > 25 && percent <= 50) completeClass = "yellow";  
			if (percent > 50 && percent <= 75) completeClass = "blue";  
			if (percent > 75) completeClass = "green";  

			s["completePercent"] = percent;
			s["completeClass"] = completeClass;
		});
	}
	
}
