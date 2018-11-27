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
        return true;
    }
    return true;
}

console.log(typeof la);
console.log(type_check_v2({prop1: 1}, {type: "object"}));
console.log(type_check_v2("foo", {type: "string", value: "foo"}));
console.log(type_check_v2("bar", {type: "string", value: "foo"}));
console.log(type_check_v2(3, {enum: ["foo", "bar", 3]}));


