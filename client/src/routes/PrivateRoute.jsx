/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable comma-dangle */
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { hideLoading, showLoading } from '../redux/features/alertSlice';
import { setUser } from '../redux/features/auth/authSlice';

function PrivateRoute({ children }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);
    const getUser = async () => {
        try {
            dispatch(showLoading());
            const { data } = await axios.post(
                'api/v1/user/get-user',
                {
                    token: localStorage.getItem('token')
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                }
            );
            dispatch(hideLoading());
            if (data.success) {
                dispatch(setUser(data.user));
            } else {
                console.log('Heeko');
                localStorage.clear();
                navigate('/login');
            }
        } catch (error) {
            dispatch(hideLoading());
            console.log(error);
            localStorage.clear();
        }
    };
    useEffect(() => {
        if (!user) {
            getUser();
        }
    }, [user]);
    console.log(user);
    if (localStorage.getItem('token')) {
        return children;
    }
    return <Navigate to="/login" />;
}

export default PrivateRoute;
