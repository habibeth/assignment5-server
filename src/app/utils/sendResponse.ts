import { Response } from "express";
import httpStatus from "http-status";

type TMeta = {
    limit: number;
    page: number;
    total: number;
    totalPage: number;
};

type TResponse<T> = {
    message?: string;
    data: T;
    token?: string;
    meta?: TMeta;
}


const sendResponse = <T>(res: Response, data: TResponse<T>) => {
    if (Array.isArray(data?.data) && data?.data?.length === 0) {
        res.status(httpStatus.NOT_FOUND).send({
            success: false,
            statusCode: 404,
            message: "No Data Found",
            data: []
        })
    }


    res.status(httpStatus.OK).json({
        success: true,
        statusCode: httpStatus.OK,
        message: data?.message,
        accessToken: data?.token,
        meta: data?.meta,
        data: data?.data
    })
};

export default sendResponse;