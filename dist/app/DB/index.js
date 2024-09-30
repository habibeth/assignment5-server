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
Object.defineProperty(exports, "__esModule", { value: true });
const user_constant_1 = require("../modules/user/user.constant");
const user_model_1 = require("../modules/user/user.model");
const adminUser = {
    name: 'Ahsan Habib',
    email: 'cse.habibdiu@gmail.com',
    password: 'admin123',
    phone: "1234567890",
    images: "https://res.cloudinary.com/dg3pfilyl/image/upload/v1727419215/Ahsan%20Habib.jpg",
    role: user_constant_1.USER_ROLE.admin,
    address: "123 Main Street, City, Country",
    isDeleted: false,
};
const seedAdmin = () => __awaiter(void 0, void 0, void 0, function* () {
    //when database is connected, we will check is there any user who is super admin
    const isAdminExits = yield user_model_1.User.findOne({ role: user_constant_1.USER_ROLE.admin, email: adminUser.email });
    if (!isAdminExits) {
        yield user_model_1.User.create(adminUser);
    }
});
exports.default = seedAdmin;
