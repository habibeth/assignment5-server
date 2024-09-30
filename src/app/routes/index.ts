import { Router } from "express"
import { UserRoutes } from "../modules/user/user.route";
import { AuthRoutes } from "../modules/Auth/auth.route";
import { RoomRoutes } from "../modules/room/room.route";
import { SlotsRoutes } from "../modules/Slots/slots.route";
import { BookingRouts } from "../modules/Booking/booking.route";


const router = Router()

const moduleRoutes = [
    {
        path: '/users',
        route: UserRoutes,
    },
    {
        path: '/auth',
        route: AuthRoutes,
    },
    {
        path: '/rooms',
        route: RoomRoutes,
    },
    {
        path: '/slots',
        route: SlotsRoutes,
    },
    {
        path: '/bookings',
        route: BookingRouts,
    },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router;

