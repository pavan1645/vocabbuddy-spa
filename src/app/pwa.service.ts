import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class PwaService {
	public updateAvailable = new BehaviorSubject<boolean>(false);
	
	constructor(private swUpdate: SwUpdate) {
		swUpdate.available.subscribe(event => {
			this.updateAvailable.next(true);
		})
	}
}
