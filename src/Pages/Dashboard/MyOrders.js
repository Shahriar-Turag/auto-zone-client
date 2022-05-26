import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import OrderCard from "../OrderCard/OrderCard";

import Loading from "../Shared/Loading";

const MyOrders = () => {
    const [user, loading] = useAuthState(auth);

    const [myOrders, setMyOrders] = useState([]);

    useEffect(() => {
        const author = { author: user.email };

        fetch("http://localhost:5000/myOrders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(author),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data[0]) {
                    setMyOrders(data);
                    console.log(data);
                }
            });
    }, [user.email]);

    const handleDelete = (id) => {
        const warning = window.confirm(
            "Are you sure\nYou want to delete this order..!?"
        );
        if (warning) {
            const url = `http://localhost:5000/orders/${id}`;
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
