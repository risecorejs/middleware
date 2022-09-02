"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * PARAMS-IS-NOT-NAN
 * @param keys {string[]}
 * @return {express.Handler}
 */
function default_1(...keys) {
    if (Array.isArray(keys[0])) {
        keys = keys[0];
    }
    return (req, res, next) => {
        for (const key of keys) {
            if (isNaN(+req.params[key])) {
                const status = 400;
                return res.status(status).json({
                    status,
                    message: `Parameter "${key}" cannot be NaN`
                });
            }
        }
        next();
    };
}
exports.default = default_1;
