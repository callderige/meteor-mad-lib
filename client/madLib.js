Template.title.events({
	"submit .test"(event){
		event.preventDefault();
		let exclamation = event.target.exclamation.value;
		let adverb = event.target.adverb.value;
		let noun = event.target.noun.value;
		let verb = event.target.verb.value;

		let madLib = "'" +  exclamation + "!' you say, as you " + adverb + " jump onto your " + noun + " and " +  verb + " into the sunset.";
		event.target.display1.value = madLib;
		console.log(madLib);
	}
});