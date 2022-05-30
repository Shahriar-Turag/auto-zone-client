import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import auth from "../../firebase.init";

const MyProfile = () => {
    const [user] = useAuthState(auth);

    const [myInfo, setMyInfo] = useState([]);

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        axios
            .post("https://limitless-thicket-02169.herokuapp.com/info", data)
            .then((res) => {
                if (res.data.insertedId) {
                    alert("Info added successfully");
                    reset();
                }
            });
    };

    useEffect(() => {
        if (user) {
            fetch(
                `https://limitless-thicket-02169.herokuapp.com/info?email=${user.email}`,
                {
                    method: "GET",
                }
            )
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    setMyInfo(data);
                    console.log(data);
                });
        }
    }, [user]);

    return (
        <div class="hero min-h-screen bg-base-100">
            <div class="hero-content text-center">
                <div class="max-w-md border rounded-xl">
                    <div className=" pt-8">
                        <div class="avatar">
                            <div class="w-24 mask mask-hexagon ">
                                <img src={user?.photoURL} alt="" />
                            </div>
                        </div>
                        <div>
                            <p className="font-bold">{user?.displayName}</p>
                            <p className="text-sm">{user?.email}</p>
                        </div>
                        <div className="space-x-4 py-5">
                            {/* <Link target="_blank" to={myInfo.linkedin}>
                                <button className="fab fa-linkedin-in btn btn-info text-white btn-xs"></button>
                            </Link> */}

                            <a href="https://www.facebook.com/shahriar.turag/">
                                <button className="fab fa-facebook btn btn-secondary text-white btn-xs"></button>
                            </a>
                            <a href="https://github.com/Shahriar-Turag">
                                <button className="fab fa-github btn bg-black  text-white btn-xs"></button>
                            </a>
                        </div>
                    </div>
                    <div class="card w-[99%] lg:w-96 bg-base-100 shadow-xl">
                        {myInfo.map((info) => (
                            <div key={info._id} class="card-body">
                                <h2 class="text-left text-2xl font-bold">
                                    More info
                                </h2>
                                <div className="text-left font-bold space-y-3">
                                    <p>
                                        <i class="fas fa-graduation-cap"></i>{" "}
                                        Studied at &nbsp;{info.studyIn}
                                    </p>
                                    <p>
                                        <i class="fas fa-home"></i>&nbsp;Lives
                                        in {info.livesIn}{" "}
                                    </p>
                                    <p>
                                        {" "}
                                        <i class="fas fa-phone"></i>
                                        &nbsp;Phone: {info.phone}{" "}
                                    </p>
                                </div>
                                <div class="card-actions justify-end">
                                    <div>
                                        <label
                                            htmlFor="my-modal-6"
                                            className="btn btn-primary"
                                        >
                                            Edit
                                        </label>
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <div className="card-actions justify-end">
                                                <input
                                                    type="checkbox"
                                                    id="my-modal-6"
                                                    className="modal-toggle"
                                                />
                                                <div className="modal modal-bottom sm:modal-middle">
                                                    <div className="modal-box px-10 pt-14">
                                                        <div>
                                                            <h1 className="text-center font-bold text-3xl uppercase pb-5">
                                                                Update Info
                                                            </h1>
                                                        </div>

                                                        <div>
                                                            <label className="label">
                                                                <span className="label-text">
                                                                    Studied at
                                                                </span>
                                                            </label>
                                                            <input
                                                                {...register(
                                                                    "studyIn"
                                                                )}
                                                                type="text"
                                                                placeholder="Studied at"
                                                                className="input input-bordered input-warning w-full "
                                                            />
                                                        </div>
                                                        <div>
                                                            <label className="label">
                                                                <span className="label-text">
                                                                    Your Email
                                                                </span>
                                                            </label>
                                                            <input
                                                                {...register(
                                                                    "email"
                                                                )}
                                                                type="email"
                                                                placeholder="Your email"
                                                                value={
                                                                    user?.email ||
                                                                    ""
                                                                }
                                                                className="input input-bordered input-warning w-full"
                                                            />
                                                        </div>
                                                        <div>
                                                            <label className="label">
                                                                <span className="label-text">
                                                                    Lives in
                                                                </span>
                                                            </label>
                                                            <input
                                                                {...register(
                                                                    "livesIn"
                                                                )}
                                                                type="text"
                                                                placeholder="Lives in"
                                                                className="input input-bordered input-warning w-full "
                                                            />
                                                        </div>
                                                        <div>
                                                            <label className="label">
                                                                <span className="label-text">
                                                                    Phone
                                                                </span>
                                                            </label>
                                                            <input
                                                                {...register(
                                                                    "phone"
                                                                )}
                                                                type="text"
                                                                placeholder="Phone"
                                                                className="input input-bordered input-warning w-full "
                                                            />
                                                        </div>
                                                        <div>
                                                            <label className="label">
                                                                <span className="label-text">
                                                                    LinkedIn
                                                                </span>
                                                            </label>
                                                            <input
                                                                {...register(
                                                                    "linkedin"
                                                                )}
                                                                type="text"
                                                                placeholder="LinkedIn URL"
                                                                className="input input-bordered input-warning w-full "
                                                            />
                                                        </div>
                                                        <div>
                                                            <label className="label">
                                                                <span className="label-text">
                                                                    Facebook
                                                                </span>
                                                            </label>
                                                            <input
                                                                {...register(
                                                                    "facebook"
                                                                )}
                                                                type="text"
                                                                placeholder="facebook URL"
                                                                className="input input-bordered input-warning w-full "
                                                            />
                                                        </div>
                                                        <div>
                                                            <label className="label">
                                                                <span className="label-text">
                                                                    Git hub
                                                                </span>
                                                            </label>
                                                            <input
                                                                {...register(
                                                                    "github"
                                                                )}
                                                                type="text"
                                                                placeholder="Git hub URL"
                                                                className="input input-bordered input-warning w-full "
                                                            />
                                                        </div>

                                                        <div className="modal-action justify-evenly">
                                                            <label
                                                                htmlFor="my-modal-6"
                                                                className="btn btn-sm btn-circle absolute right-2 top-2"
                                                            >
                                                                ✕
                                                            </label>
                                                            <input
                                                                type="submit"
                                                                value="Update"
                                                                className="btn btn-secondary w-full max-w-xs"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
