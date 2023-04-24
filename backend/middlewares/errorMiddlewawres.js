/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
export const errorMiddleware = (err, req, res, next) => {
    res.status(400).json({
        message: 'Something went wrong!!!',
        success: false,
        err,
    });
    next();
};
