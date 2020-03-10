function Ceasar(obj){
	//creating alphabet and vars
	var alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase(),
		otherCharacters='-_=+/|1234567890!№#;%:?*().,',

		OUTPUT="",
		STRING,
		shiftAmount,
		shiftAlphabet;

	//values
	if(typeof obj=="object"){
		shiftAmount=obj.shift;
		STRING=obj.msg.toLowerCase();
	} else{
		return;
	}

	//Shift alphabet
	if(typeof STRING==="string" || typeof(STRING+"")==="string"){
		shiftAlphabet=alphabet.slice(shiftAmount);
		shiftAlphabet+=alphabet.slice(0,shiftAmount);
		shiftAlphabet+=otherCharacters;
		alphabet+=otherCharacters;

		//Ecnrypt the message
		for(var i=0; i<STRING.length; i++){
			var NUMBER=alphabet.indexOf(STRING[i]);

			OUTPUT+= shiftAlphabet[NUMBER];
		}
	} else{
		return;
	};

	return OUTPUT;
}

