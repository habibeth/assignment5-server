import { NextFunction, Request, Response, Router } from "express";
import { RoomControllers } from "./room.controller";
import validateRequest from "../../middleware/vaildRequest";
import { RoomValidationSchema } from "./room.validation";
import auth from "../../middleware/auth";
import { USER_ROLE } from "../user/user.constant";
import { upload } from "../../utils/sendImageToCloudinary";
import { multerUpload } from "../../config/multer.config";



const route = Router();

route.post(
    '/create-room',
    auth(USER_ROLE.admin),
    multerUpload.single('file'),
    (req: Request, res: Response, next: NextFunction) => {
        console.log(JSON.parse(req.body.data))
        req.body = JSON.parse(req.body.data);
        next()
    },
    validateRequest(RoomValidationSchema.createRoomValidationSchema),
    RoomControllers.createRoom
)

route.get(
    '/:id',
    RoomControllers.getSingleRoom
)
route.get(
    '/',
    RoomControllers.getAllRooms
)

route.patch(
    '/:roomId',
    auth(USER_ROLE.admin),
    validateRequest(RoomValidationSchema.updateRoomValidationSchema),
    RoomControllers.updateRoom
)

route.delete(
    '/:id',
    auth(USER_ROLE.admin),
    RoomControllers.deleteRoom
)




export const RoomRoutes = route