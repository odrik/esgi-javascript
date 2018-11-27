function type_check_v1(value, type) {
	if(value === undefined) {
    	return true;
    }
    if (value === null || !type) {
        return false;
    }
    if (typeof value === type) {
        return true;
    }
    if (value === null && type === "null") {
        return true;
    }
    if (Array.isArray(value) && type.toLowerCase() === "array") {
        return true;
    }
    return false;
}

function checkArray(value, type) {
    for (var prop in type) {
        if (type[prop] === value) {
            return true;
        }
    }
    return false;
}

function type_check_v2(value, type) {
    if (type.type && !type_check_v1(value, type.type)) {
        return false;
    }
    if (type.value && type.value !== value) {
        return false;
    }
    if (type.enum && checkArray(value, type.enum)) {
        return false;
    }
    return true;
}

//console.log(typeof teste);
//console.log(type_check_v1(teste, "function"));
