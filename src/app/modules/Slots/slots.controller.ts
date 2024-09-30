import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { SlotsServices } from "./slots.service";

const createSlots = catchAsync(async (req, res) => {
    const slotData = req.body;

    const result = await SlotsServices.createSlotsIntoDB(
        slotData
    );

    sendResponse(res, {
        message: 'Slots created successfully',
        data: result,
    });
});

const getAllSlots = catchAsync(async (req, res) => {
    const result = await SlotsServices.getAllSlotsFromDB(req.query);
    sendResponse(res, {
        message: "Available slots retrieved successfully",
        meta: result.meta,
        data: result.result,
    })
})


const updateSlots = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await SlotsServices.updateSlotsIntoDB(id);
    sendResponse(res, {
        message: "Slots updated successfully",
        data: result
    })
})

const deleteSlots = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await SlotsServices.deleteSlotsIntoDB(id);
    sendResponse(res, {
        message: "Slots deleted successfully",
        data: result
    })
})

export const SlotsControllers = {
    createSlots,
    getAllSlots,
    updateSlots,
    deleteSlots
}