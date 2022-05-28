import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";

import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ">
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Order List</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/myOrders">My Order</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/review">Sidebar Item 2</Link>
                    </li>
                    {admin && (
                        <>
                            <li>
                                <Link to="/dashboard/users">All Users</Link>
                            </li>
                            <li>
                                <Link to="/dashboard/addProduct">
                                    Add Product
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/manage">
                                    Manage Products
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
