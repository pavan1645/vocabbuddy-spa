import { Component, OnInit } from '@angular/core';
import SECTIONS from "../../../assets/section-mapping.json";

@Component({
	selector: 'app-learn',
	templateUrl: './learn.component.html',
	styleUrls: ['./learn.component.scss']
})
export class LearnComponent implements OnInit {
	private sections: any[] = SECTIONS;

	constructor() { }
	
	ngOnInit() {
	}
	
}
