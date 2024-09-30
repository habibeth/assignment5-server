import { NextFunction, Request, Response, Router } from 'express';
import { UserValidation } from './user.validation';
import { UserControllers } from './user.controller';
import validateRequest from '../../middleware/vaildRequest';
import { upload } from '../../utils/sendImageToCloudinary';
import auth from '../../middleware/auth';
import { USER_ROLE } from './user.constant';

const router = Router();

router.post(
    '/create-user',
    upload.single('file'),
    (req: Request, res: Response, next: NextFunction) => {
        req.body = JSON.parse(req.body.data);
        next()
    },
    validateRequest(UserValidation.createUserValidationSchema),
    UserControllers.createUser
)

router.get(
    '/',
    UserControllers.getAllUsers
)

router.patch(
    '/:id',
    auth(USER_ROLE.admin),
    validateRequest(UserValidation.updateUserValidationSchema),
    UserControllers.updateUser
)

router.delete(
    '/:id',
    auth(USER_ROLE.admin),
    UserControllers.deleteUser
)


export const UserRoutes = router;