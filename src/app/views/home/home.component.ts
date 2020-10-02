import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	activeBtn = -1;

	constructor(private router: Router, private sharedService: SharedService) { }
	
	ngOnInit() {
		this.sharedService.setSeo();
	}

}
