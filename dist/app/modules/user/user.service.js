"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const user_model_1 = require("./user.model");
const QueryBuilder_1 = __importDefault(require("../../builder/QueryBuilder"));
const user_constant_1 = require("./user.constant");
const createUserIntoDB = (fileName, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.User.isUserExistsByEmailAddress(payload.email);
    if (user) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'This user is Already Registered!');
    }
    payload.profileImage = fileName;
    payload.role = 'user';
    const result = yield user_model_1.User.create(payload);
    return result;
});
const getAllUsersFromDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const roomQuery = new QueryBuilder_1.default(user_model_1.User.find(), query)
        .search(user_constant_1.UserSearchableFields)
        .filter()
        .sort()
        .paginate()
        .fields();
    const result = yield roomQuery.modelQuery;
    const meta = yield roomQuery.countTotal();
    return {
        meta,
        result
    };
});
const updateUserFromDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    if (payload.email) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, 'Email Cannot be Change!');
    }
    const result = yield user_model_1.User.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
    return result;
});
const deleteUserFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.findByIdAndUpdate(id, { isDeleted: true }, {
        new: true,
        runValidators: true,
    });
    return result;
});
exports.UserServices = {
    createUserIntoDB,
    getAllUsersFromDB,
    updateUserFromDB,
    deleteUserFromDB
};
