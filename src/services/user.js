/* eslint-disable @typescript-eslint/no-explicit-any */
import toast from 'react-hot-toast';
import axiosClient from '@/utils/axios'

class User {

    async signUp(values) {
        try {
            const response = await axiosClient().post('users/register', values);
            return response.data.data;
        } catch (error) {
            return error?.response?.data.error;
        }
    }

    async createUserPassword({ password, jwt_token }) {
        try {
            await axiosClient().patch(
                `users/confirm-password`,
                { password: password },
                {
                    headers: {
                        authorization: `Bearer ${jwt_token}`,
                        'Content-Type': 'application/json',
                        accept: 'application/json',
                    },
                }
            );
            return { success: true };
        } catch (error) {
            console.error('Registration error:', error);
            return error?.response?.data?.error;
        }
    }
}

export const userApi = new User();
