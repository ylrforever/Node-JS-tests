const assert = require("chai").assert;

const names = [
    "Michael Daniel Jäger",
    "LINUS HARALD christer WAHLGREN",
    "Pippilotta Viktualia Rullgardina Krusmynta Efraimsdotter LÅNGSTRUMP",
    "Kalle Anka",
    "Ghandi"
];

const expected = [
    { first: "Michael", middle: ["Daniel"], last: "Jäger" },
    { first: "Linus", middle: ["Harald", "Christer"], last: "Wahlgren" },
    { first: "Pippilotta", middle: ["Viktualia", "Rullgardina", "Krusmynta", "Efraimsdotter"], last: "Långstrump" },
    { first: "Kalle", middle: [], last: "Anka" },
    { first: "Ghandi", middle: [], last: null },
];

const validate = (result) => {
    try {
        assert.deepEqual(result, expected);
    } catch (e) {
        console.error("Failed", e);
    }
};

const nameSplit = (name) => {
    names_result = {};
    names_array = name.split(' ');
    if (names_array.length) {
        first = names_array.shift();
        names_result['first'] = first.charAt(0).toUpperCase() + first.slice(1).toLowerCase();
    } else {
        first = null;
    }
    if (names_array.length) {
        last = names_array.pop();
    } else {
        last = null;
    }
    var i = 0;
    names_result['middle'] = [];
    names_array.forEach(element => {
        names_result['middle'][i] = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
        i++;
    });
    if (last) {
        names_result['last'] = last.charAt(0).toUpperCase() + last.slice(1).toLowerCase();
    } else {
        names_result['last'] = last;
    }
    return names_result;
    
}
// implement code generating result
const result = [];
for (var i = 0, len = names.length; i < len; i++) {
    result[i] = nameSplit(names[i]);
}
// At the end call validate
validate(result);
