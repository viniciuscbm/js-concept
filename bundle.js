"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Car = /*#__PURE__*/function () {
  function Car() {
    _classCallCheck(this, Car);

    this.vehicles = [];
  }

  _createClass(Car, [{
    key: "add",
    value: function add() {
      this.vehicles.push('BMW');
      console.log(this.vehicles);
    }
  }]);

  return Car;
}();

var MyCars = new Car();

document.getElementById('newcar').onclick = function () {
  MyCars.add();
};
