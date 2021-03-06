function ucfirst(string) {
	if (typeof string === "string") {
    	return string.charAt(0).toUpperCase() + string.slice(1);
    } else {
    	return "";
    }
}

function capitalize(string) {
	if (typeof string === "string") {
		return string.toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
    .join(' ');
    } else {
    	return "";
    }
}

function camelCase(string) {
	if (typeof string === "string") {
		return string.toLowerCase()
    .split(/_| /)
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1)).join('');
    } else {
    	return "";
    }
}

function snake_case(string) {
	if (typeof string === "string") {
		return string.toLowerCase()
    .split(' ')
    .map((word) => word).join('_');
    } else {
    	return "";
    }
}

function leet(string){
	var obj = {
	  A : '4',
	  E : '3',
	  I : '1',
	  O : '0',
	  U : '(_)',
	  Y : '7'
	}
	if (typeof string === "string") {
		var arr = string.split('');
		for (var i in arr){
			if (obj[arr[i].toUpperCase()] == undefined) {
				arr[i] = arr[i];
			} else {
				arr[i] = obj[arr[i].toUpperCase()];
			}
		}
		return arr.join('');
	} else {
		return "";
	}

}

function verlan(string) {
	if (typeof string === "string") {
		return string.split("").reverse().join("").split(" ").reverse().join(" ");
	} else {
		return "";
	}
}

function yoda(string) {
	if (typeof string === "string") {
		return string.split(" ").reverse().join(" ");
	} else {
		return "";
	}
}

function prop_access(obj, key) {
	if (obj != null) {
		if (key != null && key.length > 0) {
			return key.split(".").reduce(function(o, x) {
		        if (typeof o == "undefined" || o === null) {
		        	return o; 
		     	} else {
		         	if (typeof o[x] == "undefined" || o[x] === null) {
		         		console.log(key+" not exist"); return;
		     		} else {
		     			return o[x]; 
		     		}
		     	}
		    }, obj);
		} else {
			return obj;
		}
	} else {
		console.log(key+" not exist"); return;
	}
}

function vig(input, key) {
	var output = "";
	for (var i = 0, j = 0; i < input.length; i++) {
		var c = input.charCodeAt(i);
		var l = input[i];
		if (l == l.toUpperCase()) {
			output += String.fromCharCode((c - 65 + key[j % key.length].charCodeAt()) % 26 + 65);
			j++;
		} else if (l == l.toLowerCase()) {
			output += String.fromCharCode((c - 97 + key[j % key.length].charCodeAt()) % 26 + 97);
			j++;
		} else {
			output += input.charAt(i);
		}
	}
	console.log(output)
	return output;
}

var prairie = {
	"animal": { 
		"type": {
			"name": "dog"
		}
	}
}

//console.log(vig("diplomatie", "B421L44BLB464BL4549"));
console.log(prop_access(prairie, "animal.type"));


