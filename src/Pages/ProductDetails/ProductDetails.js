import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const quantityRef = useRef();

    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:5000/products/${productId}`)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data);
                setLoading(false);
            });
    }, []);

    return (
        <div class="card lg:card-side bg-base-100 shadow-xl m-20">
            <figure>
                <img className="" src={product.img} alt="Album" />
            </figure>
            <div class="card-body">
                <h2 class="card-title text-3xl">{product.name}</h2>
                <p>
                    {" "}
                    <span className="font-bold">Category:</span>{" "}
                    {product.category}
                </p>
                <p>
                    <span className="font-bold">Details:</span>
                    {product.description}
                </p>
                <p>
                    <span className="font-bold">Minimum order quantity:</span>
                    {product.minOrder}
                </p>
                <p>
                    <span className="font-bold">Available quantity:</span>
                    {product.availableQty}
                </p>
                <p>
                    <span className="font-bold">Price:</span> ${product.price}
                </p>

                <div class="card-actions justify-end">
                    <label for="my-modal-6" class="btn btn-primary">
                        purchase
                    </label>

                    <input
                        type="checkbox"
                        id="my-modal-6"
                        class="modal-toggle"
                    />
                    <div class="modal modal-bottom sm:modal-middle">
                        <div class="modal-box px-10 pt-14 space-y-4">
                            <div>
                                <h1 className="text-center font-bold text-3xl uppercase pb-5">
                                    Billing Details
                                </h1>
                            </div>
                            <input
                                type="text"
                                placeholder="Type here"
                                class="input input-bordered input-warning w-full "
                            />
                            <input
                                type="text"
                                placeholder="Type here"
                                class="input input-bordered input-warning w-full"
                            />
                            <input
                                ref={quantityRef}
                                type="number"
                                placeholder="Quantity"
                                class="input input-bordered input-warning w-full "
                                min={50}
                                defaultValue={50}
                            />
                            <input
                                type="text"
                                placeholder="Address"
                                class="input input-bordered input-warning w-full "
                            />
                            <input
                                type="text"
                                placeholder="Phone"
                                class="input input-bordered input-warning w-full "
                            />
                            <div class="modal-action justify-evenly">
                                <label
                                    for="my-modal-6"
                                    class="btn btn-sm btn-circle absolute right-2 top-2"
                                >
                                    ✕
                                </label>
                                <label for="my-modal-6" class="btn btn-primary">
                                    Confirm Purchase
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
