import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
	selector: '[appWave]'
})
export class WaveDirective {
	
	constructor(private el: ElementRef) { }
	
	@HostListener('click', ['$event']) onClick($event){
		const position = this.el.nativeElement.style.position;
		this.el.nativeElement.style.position = "relative";

		const overflow = this.el.nativeElement.style.overflow;
		this.el.nativeElement.style.overflow = "hidden";

		let div = document.createElement("div");
		div.classList.add("ripple");
		div.style.left = $event.offsetX + "px";
		div.style.top = $event.offsetY + "px";

		this.el.nativeElement.appendChild(div);

		setTimeout(() => {
			this.el.nativeElement.removeChild(div);
			this.el.nativeElement.style.position = position;
			this.el.nativeElement.style.overflow = overflow;	
		}, 500);
    }
	
}
