function type_check_v1(value, type) {
    if (value === null || !type) {
        return false;
    }
    if (typeof value === type) {
        return true;
    }
    if(value === undefined) {
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

//console.log(typeof 1);
//console.log(type_check_v1(["test"], "array"));