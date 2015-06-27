/**
 * set the key and value of a map
 * @type {Map}
 */
let map = new Map();
map.set('key', 'value');
const value = map.get('key');

/**
 * check if map has certain key
 * @type {Map}
 */
let map = new Map();
map.set('key', 'value');
const hasIt = map.has('key');

/**
 * map is an iterable, so it can be converted to an array
 * @type {Map}
 */
let map = new Map();
map.set('1', 'one');
map.set('2', 'two');
const mapAsArray = Array.from(map);

/**
 * map can have objects as key as well as value
 * @type {{x: number}}
 */
const obj = {x: 1};
const otherObj = {x: 1};
let map = new Map();
map.set(obj, otherObj);

// spread operator with maps
// [...map.keys()], [1,2,3]
//[...map.values()], ['one', 'two', 'three']
let map = new Map();
map.set(1, 'one')
    .set(2, 'two')
    .set(3, 'three');
