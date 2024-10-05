import { Model } from "mongoose";
import { USER_ROLE } from "./user.constant";

export interface TUser {
    _id: string;
    name: string;
    email: string;
    password: string;
    phone: string;
    profileImage?: string;
    address: string;
    role: 'admin' | 'user';
    isDeleted: boolean;
}

export type TUserRole = keyof typeof USER_ROLE;


export interface UserModel extends Model<TUser> {
    isUserExistsByEmailAddress(email: string): Promise<TUser>;
}