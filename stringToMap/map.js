function breakLine(string) {
	return string.split("\n").filter(Boolean);
}

function breakData (line) {
	return line.split(";");
}

function breakAttribute (data) {
	return data.split("=");
}

function buildMap(data) {
	return data.reduce((init, data) => {
		const [key, value] = breakAttribute(data);
		init[key] = value;
		return init;
	}, {})
}
function transformToMap(...data) {
	return Object.assign({},...data);
}

function mergeKeyValuePair(attr) {
	return attr.join("=");
}

function mergeAttribute(attr) {
	return attr.join(";");
}

function mergeLine(line) {
	return line.join("\n");
}


const transformStringToMap  = (string) => transformToMap(breakLine(string).map(breakData).map(buildMap));

const transformMapToString = (map) => {
	const processed = Object.values(map).map(data => {
		return Object.entries(data).map(mergeKeyValuePair)
	}).map(mergeAttribute);
	return mergeLine(processed);
}

module.exports = {
	transformStringToMap,
	transformMapToString
}

