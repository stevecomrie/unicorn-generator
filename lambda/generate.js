exports.handler = (event, context, callback) => {

    let randomcolor = function() {
    	let r = Math.floor(Math.random() * 255)
        let g = Math.floor(Math.random() * 255)
        let b = Math.floor(Math.random() * 255)
        return `rgb(${r},${g},${b})`
    };

    let names = ['Aasifa','Adara','Adiana','Aerowen','Agele','Agnes','Agrafena','Aguane','Airlia','Alberta','Aletha','Alica','Alize','Alona','Althea','Alva','Amalthea','Amara','Ametza','Andra','Angelina','Anselma','Anwen','Aranka','Argante','Ariana','Artemis','Astra','Astraea','Audrey','Aura','Aurae','Aurai','Aurina','Ayla','Benicia','Bianca','Bijou','Blythe','Bonita','Branda','Branka','Breanna','Brina','Bryanne','Calypso','Candra','Caprina','Casilda','Cassandra','Cassia','Cassiopeia','Celeste','Celina','Chiara','Chione','Chipper','Chryseis','Claribel','Clarissa','Clementine','Cornelia','Cortesia','Crystal','Danika','Della','Dessa','Deva','Diana','Doire','Drisana','Dryade','Dulcea','Duscha','Eldora','Electra','Elwyn','Enigma','Epimelide','Epona','Essa','Estrellita','Etana','Eternia','Evania','Fae','Faith','Fatima','Faye','Fleta','Floriana','Galatea','Gemma','Gratiana','Grizelda','Gwendolen','Gwyneth','Hesperide','Hippolyta','Hope','Hylzarie','Ianira','Imena','Irene','Isa','Itzel','Jada','Javiera','Jewel','Kachina','Kanya','Kenzie','Keren','Kimber','Langaria','Laqueta','Larissa','Leila','Lily','Lotus','Lucia','Luna','Lunaria','Luned','Mae','Magena','Margaret','Marya','Mawu','Megan','Menae','Mika','Mitra','Miyuki','Mona','Moriba','Mystique','Nadira','Noga','Nola','Olivia','Olwen','Opal','Oriella','Pearl','Phaedra','Philipa','Phoebe','Primara','Quarralia','Quirina','Raina','Rhiannon','Rohesia','Rosalba','Rosalind','Roshan','Roxana','Ruby','Samantha','Samara','Shakti','Shanna','Sheehan','Sidra','Silvia','Simona','Speranza','Suelita','Suki','Sveta','Sylvanine','Tacita','Tryne','Ugolina','Unity','Uriela','Usha','Valeria','Valory','Vanora','Veila','Vespera','Willow','Xanthippe','Xaviera','Xenia','Xylia','Yakira','Yaser','Yashiana','Yasmin','Yoriara','Yvette','Zanna','Zephyra','Zinerva','Zora','Zulema','Zuri'];

    let unicorn = {
		name  : names[Math.floor(Math.random()*names.length)],
		color1: randomcolor(),
		color2: randomcolor(),
		color3: randomcolor(),
		color4: randomcolor(),
		color5: randomcolor(),
		color6: randomcolor(),
    }

	callback(null, {
		statusCode: 200,
		body: JSON.stringify(unicorn)
	});

};