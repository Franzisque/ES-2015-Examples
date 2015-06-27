// size is 1
let set = new Set();

set.add(1);
set.add(1);

// 1 and '1' are different and
// add is chainable
let set = new Set();
set.add(1).add('1');