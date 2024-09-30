import { Router } from "express";
import { SlotsControllers } from "./slots.controller";
import validateRequest from "../../middleware/vaildRequest";
import { SlotsValidation } from "./slots.validation";
import auth from "../../middleware/auth";
import { USER_ROLE } from "../user/user.constant";


const route = Router();

route.post(
    '/create-slots',
    auth(USER_ROLE.admin),
    validateRequest(SlotsValidation.createSlotsValidationSchema),
    SlotsControllers.createSlots
)

route.get(
    '/',
    SlotsControllers.getAllSlots
)

route.patch(
    '/:id',
    auth(USER_ROLE.admin),
    SlotsControllers.updateSlots
)

route.delete(
    '/:id',
    auth(USER_ROLE.admin),
    SlotsControllers.deleteSlots
)


export const SlotsRoutes = route