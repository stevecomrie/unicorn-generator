exports.handler = (event, context, callback) => {

    let randomcolor = function() {
        var color;
          	color = Math.floor(Math.random() * 0x1000000); 	// integer between 0x0 and 0xFFFFFF
        	color = color.toString(16);						// convert to hex
        	color = ("000000" + color).slice(-6); 			// pad with leading zeros
        	color = "#" + color; 							// prepend #

        return color;
    };

	let shuffle = function(a) {
	    var j, x, i;
	    for (i = a.length - 1; i > 0; i--) {
	        j = Math.floor(Math.random() * (i + 1));
	        x = a[i];
	        a[i] = a[j];
	        a[j] = x;
	    }
	    return a;
	};

	let names      = ['Aasifa','Adara','Adiana','Aerowen','Agele','Agnes','Agrafena','Aguane','Airlia','Alberta','Aletha','Alica','Alize','Alona','Althea','Alva','Amalthea','Amara','Ametza','Andra','Angelina','Anselma','Anwen','Aranka','Argante','Ariana','Artemis','Astra','Astraea','Audrey','Aura','Aurae','Aurai','Aurina','Ayla','Benicia','Bianca','Bijou','Blythe','Bonita','Branda','Branka','Breanna','Brina','Bryanne','Calypso','Candra','Caprina','Casilda','Cassandra','Cassia','Cassiopeia','Celeste','Celina','Chiara','Chione','Chipper','Chryseis','Claribel','Clarissa','Clementine','Cornelia','Cortesia','Crystal','Danika','Della','Dessa','Deva','Diana','Doire','Drisana','Dryade','Dulcea','Duscha','Eldora','Electra','Elwyn','Enigma','Epimelide','Epona','Essa','Estrellita','Etana','Eternia','Evania','Fae','Faith','Fatima','Faye','Fleta','Floriana','Galatea','Gemma','Gratiana','Grizelda','Gwendolen','Gwyneth','Hesperide','Hippolyta','Hope','Hylzarie','Ianira','Imena','Irene','Isa','Itzel','Jada','Javiera','Jewel','Kachina','Kanya','Kenzie','Keren','Kimber','Langaria','Laqueta','Larissa','Leila','Lily','Lotus','Lucia','Luna','Lunaria','Luned','Mae','Magena','Margaret','Marya','Mawu','Megan','Menae','Mika','Mitra','Miyuki','Mona','Moriba','Mystique','Nadira','Noga','Nola','Olivia','Olwen','Opal','Oriella','Pearl','Phaedra','Philipa','Phoebe','Primara','Quarralia','Quirina','Raina','Rhiannon','Rohesia','Rosalba','Rosalind','Roshan','Roxana','Ruby','Samantha','Samara','Shakti','Shanna','Sheehan','Sidra','Silvia','Simona','Speranza','Suelita','Suki','Sveta','Sylvanine','Tacita','Tryne','Ugolina','Unity','Uriela','Usha','Valeria','Valory','Vanora','Veila','Vespera','Willow','Xanthippe','Xaviera','Xenia','Xylia','Yakira','Yaser','Yashiana','Yasmin','Yoriara','Yvette','Zanna','Zephyra','Zinerva','Zora','Zulema','Zuri'];
	let attributes = ['adventurous','ambitious','cheerful','clever','confident','creative','curious','determined','diligent','easy going','energetic','enthusiastic','friendly','imaginative','inquisitive','insightful','intuitive','patient','relaxed'];
	shuffle(attributes);

    let unicorn = {
		name      : names[Math.floor(Math.random()*names.length)],
		attribute1: attributes.shift(),
		attribute2: attributes.pop(),
		color1    : randomcolor(),
		color2    : randomcolor(),
		color3    : randomcolor(),
		color4    : randomcolor(),
		color5    : randomcolor(),
		color6    : randomcolor(),
    }

	callback(null, {
		statusCode: 200,
        headers: {
        	'content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
		body: JSON.stringify(unicorn)
	});

};