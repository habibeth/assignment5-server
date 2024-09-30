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
exports.SlotsControllers = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const slots_service_1 = require("./slots.service");
const createSlots = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const slotData = req.body;
    const result = yield slots_service_1.SlotsServices.createSlotsIntoDB(slotData);
    (0, sendResponse_1.default)(res, {
        message: 'Slots created successfully',
        data: result,
    });
}));
const getAllSlots = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield slots_service_1.SlotsServices.getAllSlotsFromDB(req.query);
    (0, sendResponse_1.default)(res, {
        message: "Available slots retrieved successfully",
        meta: result.meta,
        data: result.result,
    });
}));
const updateSlots = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield slots_service_1.SlotsServices.updateSlotsIntoDB(id);
    (0, sendResponse_1.default)(res, {
        message: "Slots updated successfully",
        data: result
    });
}));
const deleteSlots = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield slots_service_1.SlotsServices.deleteSlotsIntoDB(id);
    (0, sendResponse_1.default)(res, {
        message: "Slots deleted successfully",
        data: result
    });
}));
exports.SlotsControllers = {
    createSlots,
    getAllSlots,
    updateSlots,
    deleteSlots
};
