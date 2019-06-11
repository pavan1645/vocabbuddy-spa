export class Globals {
	private static progressJson: any[];
	private static words: any[];

	get progress() {
		return [...Globals.progressJson];
	}

	set progress(val) {
		console.log("setter called");
		
		Globals.progressJson = val;
		localStorage.setItem("progress", JSON.stringify(Globals.progressJson));
	}

	get words() {
		return [...Globals.words];
	}

	set words(val) {
		console.log("words setter called");
		
		Globals.words = val;
		localStorage.setItem("words", JSON.stringify(Globals.words));
	}
}