var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Cl1 = /** @class */ (function () {
    function Cl1() {
        var _this = this;
        this.getSmth1 = function () {
            console.log(_this);
        };
        this.el1 = 'el1';
    }
    return Cl1;
}());
var Cl2 = /** @class */ (function (_super) {
    __extends(Cl2, _super);
    function Cl2() {
        var _this = _super.call(this) || this;
        _this.el2 = 'el2';
        return _this;
    }
    Cl2.prototype.getSmth2 = function () {
        console.log(2);
    };
    Cl2.prototype.getIns = function () {
        this.getSmth1();
    };
    return Cl2;
}(Cl1));
var cl = new Cl2();
cl.getSmth1();
cl.getIns();
