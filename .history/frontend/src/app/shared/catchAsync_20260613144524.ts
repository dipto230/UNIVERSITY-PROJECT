const catchAsync = (fn: RequestHandle) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await fn(req, res, next);
        } catch (error: any) {
            console.log(error);
            res.status(500).json({
                success: false,
                message: 'Failed to fetch',
                error: error.message
            })
        }
    }
}