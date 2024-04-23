//Higher order function. (function that takes function as argument or returns function)
/* export const asyncHandler = (fn) => async (req, res, next) => {
    try {
        await fn(req, res, next);
    } catch (e) {
        res.status(e.code || 500).json({
            sucess: false,
            message: e.message
        })
    }
} */

//OR
export const asyncHandler = (requestHandler) => (
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
)