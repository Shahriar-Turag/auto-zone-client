import React from "react";

const UserRow = ({ user }) => {
    const { email, role } = user;

    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
    };
    return (
        <tr>
            <th>1</th>
            <td>{email}</td>
            {/* <td>
                {role !== "admin" && (
                    <button
                        onClick={makeAdmin}
                        class="btn btn-outline btn-sm btn-success"
                    >
                        Make Admin
                    </button>
                )}
            </td> */}
            <td>
                {role !== "admin" && (
                    <label
                        onClick={makeAdmin}
                        for="my-modal-6"
                        class="btn modal-button"
                    >
                        Make Admin
                    </label>
                )}

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
            </td>
            <td>
                <button class="btn btn-outline btn-sm btn-error">
                    Remove User
                </button>
            </td>
        </tr>
    );
};

export default UserRow;
