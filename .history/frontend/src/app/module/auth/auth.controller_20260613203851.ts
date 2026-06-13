import { Request, Response } from "express";
import { catchAsync } from "../../shared/catchAsync";
import { AuthService } from "./auth.service";
import { sendResponse } from "../../shared/sendResponse";

const registerUser = catchAsync(
    async (req: Request, res: Response) => {
        const payload = req.body;
        const result = await AuthService.registerUser(payload);
        sendResponse(res, {
            httpStatusCode: 201,
            success: true,
            message:"User Register Successfully"
        })
    }
)