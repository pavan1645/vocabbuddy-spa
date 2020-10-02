import { Component, OnInit } from '@angular/core';
import { Globals } from 'src/app/globals.js';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

let progress = new Globals().progress;

@Component({
	selector: 'app-practice',
	templateUrl: './practice.component.html',
	styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit {
	
	sections: any[] = progress;
	
	constructor(private router: Router, public sharedService: SharedService) { }
	
	ngOnInit() {

		this.sharedService.setSeo({
			title: "Practice Section | Vocabbuddy"
		})

		this.sections.forEach((s, i) => {
			let index = s.words.findIndex(w => w.isRemembered == 0);
			if (index > -1) s["isLocked"] = 1;
			else s["isLocked"] = 0;
		})
	}

	navigateTest(i: number) {
		let section = this.sections[i];
		if (section.isLocked == 1) return this.router.navigateByUrl("/learn/" + section.name);
		this.router.navigateByUrl("/practice/" + section.name);
	}
	
}
