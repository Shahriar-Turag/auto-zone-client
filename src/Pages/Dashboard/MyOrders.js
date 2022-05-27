import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import auth from "../../firebase.init";
import OrderCard from "../OrderCard/OrderCard";

import Loading from "../Shared/Loading";

const MyOrders = () => {
    const [user, loading] = useAuthState(auth);

    const [myOrders, setMyOrders] = useState([]);

    useEffect(() => {
        if (user) {
            fetch(
                `https://limitless-thicket-02169.herokuapp.com/orders?email=${user.email}`,
                {
                    method: "GET",
                    headers: {
                        authorization: `Bearer ${localStorage.getItem(
                            "accessToken"
                        )}`,
                    },
                }
            )
                .then((res) => {
                    console.log("res", res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem("accessToken");
                        Navigate("/");
                    }
                    return res.json();
                })
                .then((data) => {
                    if (data) {
                        setMyOrders(data);
                        console.log(data);
                    }
                });
        }
    }, [user]);

    const handleDelete = (id) => {
        const warning = window.confirm(
            "Are you sure\nYou want to delete this order..!?"
        );
        if (warning) {
            const url = `https://limitless-thicket-02169.herokuapp.com/orders/${id}`;
            fetch(url, { method: "DELETE" })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        const remaining = myOrders.filter(
                            (order) => order._id !== id
                        );
                        setMyOrders(remaining);
                    }
                });
        }
    };
    if (loading) {
        return <Loading />;
    }

    return (
        <div>
            <h1>my order</h1>
            {myOrders.map((order) => (
                <OrderCard key={order._id} product={order}>
                    <button
                        onClick={() => handleDelete(order._id)}
                        className="btn btn-primary text-white"
                    >
                        Delete
                    </button>
                </OrderCard>
            ))}
        </div>
    );
};

export default MyOrders;
