"use strict";

var name = "Vinicius";
var age = "28";

var sayMyName = function sayMyName(name) {
  var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
  console.log("Meu nome é " + name + " e eu tenho " + age + " anos.");
};

sayMyName(name, age);
