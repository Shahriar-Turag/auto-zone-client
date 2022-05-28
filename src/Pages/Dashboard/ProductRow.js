import React, { useState } from "react";
import { toast } from "react-toastify";

const ProductRow = ({ product, index, refetch }) => {
    const { img, name, category, availableQty, price, id } = product;

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/products/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`${name} deleted successfully`);
                    refetch();
                }
            });
    };
    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div class="flex items-center space-x-3">
                    <div class="avatar">
                        <div class="mask mask-squircle w-12 h-12">
                            <img
                                src={img}
                                alt="Avatar Tailwind CSS Component"
                            />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {name.slice(0, 20)}
                <br />
                <span class="badge badge-ghost badge-sm">{category}</span>
            </td>

            <td>{availableQty}</td>
            <td>{price}</td>
            <th>
                <label for="my-modal-6" class="btn modal-button">
                    open modal
                </label>

                <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                <div class="modal modal-bottom sm:modal-middle">
                    <div class="modal-box">
                        <h3 class="font-bold text-lg">
                            Congratulations random Interner user!
                        </h3>
                        <p class="py-4">
                            You've been selected for a chance to get one year of
                            subscription to use Wikipedia for free!
                        </p>
                        <div class="modal-action">
                            <label for="my-modal-6" class="btn">
                                Yay!
                            </label>
                        </div>
                    </div>
                </div>
                {/* <button
                    onClick={() => handleDelete(product._id)}
                    class="btn btn-ghost btn-xs"
                >
                    Delete
                </button> */}

                <label
                    for={`id${product._id}`}
                    class="btn btn-xs modal-button bg-error text-white "
                >
                    Delete
                </label>

                <input
                    type="checkbox"
                    id={`id${product._id}`}
                    class="modal-toggle"
                />
                <div class="modal">
                    <div class="modal-box">
                        <h3 class="font-bold text-lg">
                            Are you sure you want to delete this {product.name}
                        </h3>

                        <div class="modal-action">
                            <label
                                onClick={() => handleDelete(product._id)}
                                for={`id${product._id}`}
                                class="btn"
                            >
                                Yes
                            </label>
                        </div>
                    </div>
                </div>
            </th>
        </tr>
    );
};

export default ProductRow;
