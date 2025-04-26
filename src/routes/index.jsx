import React from 'react'
import Home from "@/Pages/Home.jsx";
import Products from "@/Pages/Products/Products.jsx";
import Loginpage from "@/Pages/Auth/Loginpage.jsx";
import Signuppage from "@/Pages/Auth/Signuppage.jsx";
import Cartpage from "@/Pages/Customer/Cartpage.jsx";
import Profilepage from "@/Pages/User/Profilepage.jsx";
import Orderspage from "@/Pages/Admin/Orderspage.jsx";
import Createproductpage from "@/Pages/Admin/Createproductpage.jsx";
import ProductDetails from "@/Pages/Products/ProductDetails.jsx";
import Transectionfail from "@/Pages/Stripe/Transectionfail.jsx";
import Transectionsuccess from "@/Pages/Stripe/Transectionsuccess.jsx";
import Error from "@/Pages/Error.jsx";

import { AuthGuard, PublicGuard } from '@/middlewares/AuthGuard.jsx';
import paths from "@/constants/path-names.json";
import userRoles from "@/constants/user-roles.json";

const allRoutes = (currentRole) => {
    return [
        {
            path: paths.home,
            element: <Home />,
        },

        {
            path: paths.products,
            element: <Products />,
        },

        {
            path: paths.productsDetails,
            element: <ProductDetails />,
        },
        {
            path: paths.login,
            element: (
                <PublicGuard>
                    <Loginpage />
                </PublicGuard>
            ),
        },
        {
            path: paths.signup,
            element: (
                <PublicGuard>
                    <Signuppage />
                </PublicGuard>
            ),
        },

        {
            path: paths.success,
            element: (
                <AuthGuard>
                    <Transectionsuccess />
                </AuthGuard>
            ),
        },

        {
            path: paths.cancel,
            element: (
                <AuthGuard>
                    <Transectionfail />
                </AuthGuard>
            ),
        },

        {
            path: paths.userProfile,
            element: (
                <AuthGuard>
                    <Profilepage />
                </AuthGuard>
            ),
        },

        ...(currentRole === userRoles.CUSTOMER ?
            [
                {
                    path: paths.cart,
                    element: (
                        <AuthGuard>
                            <Cartpage />
                        </AuthGuard>
                    ),
                }
            ] : []),

        ...(currentRole === userRoles.ADMIN ?
            [
                {
                    path: paths.allOrders,
                    element: (
                        <AuthGuard>
                            <Orderspage />
                        </AuthGuard>
                    ),
                },
                {
                    path: paths.cart,
                    element: (
                        <AuthGuard>
                            <Createproductpage />
                        </AuthGuard>
                    ),
                }
            ] : []),

        {
            path: paths.notFound,
            element: <Error />,
        }
    ]

}

export default allRoutes