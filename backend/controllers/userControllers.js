/* eslint-disable import/prefer-default-export */
export const getAllUsers = (req, res) => {
    res.status(200).json({
        message: 'Get All users',
    });
};
