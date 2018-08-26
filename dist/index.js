"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var autofake_1 = require("@fluffy-spoon/autofake");
var Utilities_1 = require("@fluffy-spoon/inverse/dist/src/Utilities");
var InverseInversionOfControlRegistration = /** @class */ (function (_super) {
    __extends(InverseInversionOfControlRegistration, _super);
    function InverseInversionOfControlRegistration(_container) {
        var _this = _super.call(this) || this;
        _this._container = _container;
        return _this;
    }
    InverseInversionOfControlRegistration.prototype.registerTypeAsInstanceFromAccessor = function (type, accessor) {
        this._container.whenResolvingType(type).useFactory(accessor).asSingleInstance();
    };
    InverseInversionOfControlRegistration.prototype.getConstructorArgumentTypesForClass = function (type) {
        var args = Utilities_1.getOrCreateArgumentsMetadataForTarget(type);
        return args.toParameterArray();
    };
    return InverseInversionOfControlRegistration;
}(autofake_1.InversionOfControlRegistration));
exports.default = InverseInversionOfControlRegistration;
//# sourceMappingURL=index.js.map