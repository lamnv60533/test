const { transformStringToMap, transformMapToString } = require('./map');
const assert = require('assert')
const string = `key1=value1;key2=value2\nkeyA=valueA\nkey3=value3;key4=value4\nkeyB=valueB`;
const map = {
	'0': { key1: 'value1', key2: 'value2' },
	'1': { keyA: 'valueA' },
	'2': { key3: 'value3', key4: 'value4' },
	'3': { keyB: 'valueB' }
}

it('should return true', () => {
	assert.deepEqual(transformStringToMap(string), map)
})

it('should return true', () => {
	assert.equal(transformMapToString(map), string)
})