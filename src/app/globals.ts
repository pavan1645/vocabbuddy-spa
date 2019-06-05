export class Globals {
	private static progressJson;

	get progress() {
		return Globals.progressJson;
	}

	set progress(val) {
		console.log("setter called");
		
		Globals.progressJson = val;
		localStorage.setItem("progress", JSON.stringify(Globals.progressJson));
	}
}