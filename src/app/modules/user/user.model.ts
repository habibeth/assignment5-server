import { Schema, model } from "mongoose";
import { TUser, UserModel } from "./user.interface";

import bcrypt from 'bcrypt';
import config from "../../config";

const userSchema = new Schema<TUser, UserModel>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: 0
    },
    profileImage: {
        type: String
    },
    phone: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    address: {
        type: String,
        required: true,
    },
    isDeleted: {
        type: Boolean
    }

})


userSchema.pre('save', async function (next) {
    const user = this;
    user.password = await bcrypt.hash(
        user.password,
        Number(config.bcrypt_salt_rounds)
    );

    next();
})

userSchema.post('save', function (doc, next) {
    (doc as any).password = undefined
    next();
});


userSchema.statics.isUserExistsByEmailAddress = async function (email: string) {
    return await User.findOne({ email: email }).select('+password');
};


export const User = model<TUser, UserModel>("User", userSchema)