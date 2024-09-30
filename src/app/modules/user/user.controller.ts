import { UserServices } from "./user.service";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";

const createUser = catchAsync(async (req, res) => {
    const user = req.body;

    const result = await UserServices.createUserIntoDB(req.file, user);
    sendResponse(res, {
        message: 'User registered successfully',
        data: result
    })
})

const getAllUsers = catchAsync(async (req, res) => {

    const result = await UserServices.getAllUsersFromDB(req.query);
    sendResponse(res, {
        message: 'User Retrieved successfully',
        meta: result.meta,
        data: result.result,
    })
})

const updateUser = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await UserServices.updateUserFromDB(id, req.body);
    sendResponse(res, {
        message: 'User Updated successfully',
        data: result
    })
})

const deleteUser = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await UserServices.deleteUserFromDB(id);
    sendResponse(res, {
        message: 'User Deleted successfully',
        data: result
    })
})


export const UserControllers = {
    createUser,
    getAllUsers,
    updateUser,
    deleteUser
}
