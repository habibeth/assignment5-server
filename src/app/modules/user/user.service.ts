import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TUser } from "./user.interface";
import { User } from "./user.model";
import QueryBuilder from "../../builder/QueryBuilder";
import { UserSearchableFields } from "./user.constant";


const createUserIntoDB = async (fileName: any, payload: TUser) => {
    const user = await User.isUserExistsByEmailAddress(payload.email);
    if (user) {
        throw new AppError(httpStatus.NOT_FOUND, 'This user is Already Registered!')
    }

    payload.profileImage = fileName
    payload.role = 'user'

    const result = await User.create(payload);
    return result;
}


const getAllUsersFromDB = async (query: Record<string, unknown>) => {
    const roomQuery = new QueryBuilder(User.find(), query)
        .search(UserSearchableFields)
        .filter()
        .sort()
        .paginate()
        .fields();
    const result = await roomQuery.modelQuery;
    const meta = await roomQuery.countTotal()
    return {
        meta,
        result
    };
}


const updateUserFromDB = async (id: string, payload: Partial<TUser>) => {
    if (payload.email) {
        throw new AppError(httpStatus.BAD_REQUEST, 'Email Cannot be Change!')
    }
    const result = await User.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    })
    return result;
}

const deleteUserFromDB = async (id: string) => {
    const result = await User.findByIdAndUpdate(id, { isDeleted: true }, {
        new: true,
        runValidators: true,
    })
    return result;
}

export const UserServices = {
    createUserIntoDB,
    getAllUsersFromDB,
    updateUserFromDB,
    deleteUserFromDB
}