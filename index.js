"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pagination_1 = __importDefault(require("./lib/pagination"));
const params_is_not_nan_1 = __importDefault(require("./lib/params-is-not-nan"));
exports.default = {
    pagination: pagination_1.default,
    paramsIsNotNaN: params_is_not_nan_1.default
};
