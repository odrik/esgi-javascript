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
    if (Array.isArray(value) && type === "array") {
        return true;
    }
    return false;
}

function teste() {
	return 1;
}

console.log(typeof teste);
console.log(type_check_v1(teste, "function"));
