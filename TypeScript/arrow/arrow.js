"use strict";
// Arrow functions
var hulk = {
    name: 'Hulk',
    smash: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.name + " smash!!!"); }, 500);
    }
};
hulk.smash();
