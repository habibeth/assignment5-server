"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = require("express");
const user_validation_1 = require("./user.validation");
const user_controller_1 = require("./user.controller");
const vaildRequest_1 = __importDefault(require("../../middleware/vaildRequest"));
const sendImageToCloudinary_1 = require("../../utils/sendImageToCloudinary");
const auth_1 = __importDefault(require("../../middleware/auth"));
const user_constant_1 = require("./user.constant");
const router = (0, express_1.Router)();
router.post('/create-user', sendImageToCloudinary_1.upload.single('file'), (req, res, next) => {
    req.body = JSON.parse(req.body.data);
    next();
}, (0, vaildRequest_1.default)(user_validation_1.UserValidation.createUserValidationSchema), user_controller_1.UserControllers.createUser);
router.get('/', user_controller_1.UserControllers.getAllUsers);
router.patch('/:id', (0, auth_1.default)(user_constant_1.USER_ROLE.admin), (0, vaildRequest_1.default)(user_validation_1.UserValidation.updateUserValidationSchema), user_controller_1.UserControllers.updateUser);
router.delete('/:id', (0, auth_1.default)(user_constant_1.USER_ROLE.admin), user_controller_1.UserControllers.deleteUser);
exports.UserRoutes = router;
