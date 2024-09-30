"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_route_1 = require("../modules/user/user.route");
const auth_route_1 = require("../modules/Auth/auth.route");
const room_route_1 = require("../modules/room/room.route");
const slots_route_1 = require("../modules/Slots/slots.route");
const booking_route_1 = require("../modules/Booking/booking.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: '/users',
        route: user_route_1.UserRoutes,
    },
    {
        path: '/auth',
        route: auth_route_1.AuthRoutes,
    },
    {
        path: '/rooms',
        route: room_route_1.RoomRoutes,
    },
    {
        path: '/slots',
        route: slots_route_1.SlotsRoutes,
    },
    {
        path: '/bookings',
        route: booking_route_1.BookingRouts,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
