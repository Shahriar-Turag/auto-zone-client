import axios from "axios";
import React, { useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";

import auth from "../../firebase.init";

const PurchaseModal = () => {
    const [product] = useState({});
    const quantityRef = useRef();
    const [user] = useAuthState(auth);
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        data.email = user?.email;

        axios.post("http://localhost:5000/products", data).then((res) => {
            if (res.data.insertedId) {
                alert("Product added to my order");
                reset();
            }
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="card-actions justify-end">
                <label for="my-modal-6" className="btn btn-primary">
                    purchase
                </label>

                <input
                    type="checkbox"
                    id="my-modal-6"
                    className="modal-toggle"
                />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box px-10 pt-14">
                        <div>
                            <h1 className="text-center font-bold text-3xl uppercase pb-5">
                                Billing Details
                            </h1>
                        </div>
                        <h4>
                            <span className="font-bold">Billing of:</span>{" "}
                            <span className="text-primary">{product.name}</span>
                        </h4>
                        <div>
                            <label className="label">
                                <span className="label-text">Your name</span>
                            </label>
                            <input
                                {...register("name")}
                                type="text"
                                placeholder="Your name"
                                value={user?.displayName || ""}
                                className="input input-bordered input-warning w-full "
                            />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input
                                {...register("email")}
                                type="email"
                                placeholder="Your email"
                                value={user?.email || ""}
                                className="input input-bordered input-warning w-full"
                            />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input
                                {...register("quantity")}
                                ref={quantityRef}
                                type="number"
                                placeholder="Quantity"
                                className="input input-bordered input-warning w-full "
                                min={50}
                                defaultValue={50}
                            />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text">Your Address</span>
                            </label>
                            <input
                                {...register("address")}
                                type="text"
                                placeholder="Address"
                                className="input input-bordered input-warning w-full "
                            />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Phone number</span>
                            </label>
                            <input
                                {...register(" phone")}
                                type="text"
                                placeholder="Phone"
                                className="input input-bordered input-warning w-full "
                            />
                        </div>
                        <div className="modal-action justify-evenly">
                            <label
                                for="my-modal-6"
                                className="btn btn-sm btn-circle absolute right-2 top-2"
                            >
                                ✕
                            </label>
                            <input
                                type="submit"
                                value="Add to my Order"
                                className="btn btn-secondary w-full max-w-xs"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default PurchaseModal;
