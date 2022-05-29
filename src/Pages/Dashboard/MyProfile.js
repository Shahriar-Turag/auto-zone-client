import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import auth from "../../firebase.init";
import InfoModal from "./InfoModal";

const MyProfile = () => {
    const [user] = useAuthState(auth);
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content text-center">
                <div class="max-w-md">
                    <div class="avatar">
                        <div class="w-24 mask mask-hexagon ">
                            <img src={user?.photoURL} alt="" />
                        </div>
                    </div>
                    <div>
                        <p className="font-bold">{user?.displayName}</p>
                        <p className="text-sm">{user?.email}</p>
                    </div>
                    <div className="space-x-3 p-3">
                        <a href="https://www.linkedin.com/feed/">
                            <button className="fab fa-linkedin-in btn btn-info text-white btn-xs"></button>
                        </a>
                        <a href="https://www.facebook.com/shahriar.turag/">
                            <button className="fab fa-facebook btn btn-secondary text-white btn-xs"></button>
                        </a>
                        <a href="https://github.com/Shahriar-Turag">
                            <button className="fab fa-github btn bg-black  text-white btn-xs"></button>
                        </a>
                    </div>
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <div class="card-body">
                            <h2 class="card-title">More info</h2>
                            <p>Studied at:</p>
                            <p>Lives in </p>
                            <p>Phone: </p>
                            <div class="card-actions justify-end">
                                <InfoModal />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
