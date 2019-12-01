'use strict';
var slot = require("../consensus/slot");
let current_slot = slot.get_slot_number();
console.log(current_slot);