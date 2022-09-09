"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * PAGINATION
 * @param req {express.Request}
 * @param res {express.Response}
 * @param next {express.NextFunction}
 */
function default_1(req, res, next) {
    const page = +req.query.page || 1;
    const pageSize = +req.query.pageSize || 25;
    req.pagination = () => {
        return {
            offset: (page - 1) * pageSize,
            limit: pageSize
        };
    };
    next();
}
exports.default = default_1;
