import React from "react";
import {
    useSignInWithGoogle,
    useCreateUserWithEmailAndPassword,
    useUpdateProfile,
} from "react-firebase-hooks/auth";

import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] =
        useSignInWithGoogle(auth);
    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    let signInError;

    const onSubmit = async (data) => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        navigate("/");
    };

    if (loading || gLoading || updating) {
        return <Loading />;
    }

    if (error || gError || updateError) {
        signInError = (
            <p className="text-red-500 pb-2">
                <small>
                    {error?.message || gError?.message || updateError?.message}
                </small>
            </p>
        );
    }

    if (user || gUser) {
        console.log(user || gUser);
    }
    return (
        <div className="flex justify-center items-center h-screen">
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center text-2xl font-bold">Sign Up</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your name"
                                class="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Name is required",
                                    },
                                })}
                            />
                            <label class="label">
                                {errors.name?.type === "required" && (
                                    <span class="label-text-alt text-red-500">
                                        {errors.name.message}
                                    </span>
                                )}
                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your email"
                                class="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is required",
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: "Please enter a valid email",
                                    },
                                })}
                            />
                            <label class="label">
                                {errors.email?.type === "required" && (
                                    <span class="label-text-alt text-red-500">
                                        {errors.email.message}
                                    </span>
                                )}
                                {errors.email?.type === "pattern" && (
                                    <span class="label-text-alt text-red-500">
                                        {errors.email.message}
                                    </span>
                                )}
                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Your Password"
                                class="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is required",
                                    },
                                    minLength: {
                                        value: 6,
                                        message:
                                            "Must be at least 6 characters",
                                    },
                                })}
                            />
                            <label class="label">
                                {errors.password?.type === "required" && (
                                    <span class="label-text-alt text-red-500">
                                        {errors.password.message}
                                    </span>
                                )}
                                {errors.password?.type === "minlength" && (
                                    <span class="label-text-alt text-red-500">
                                        {errors.email.message}
                                    </span>
                                )}
                            </label>
                        </div>
                        {signInError}
                        <input
                            className="btn  btn-secondary w-full"
                            type="submit"
                            value="SIGNUP"
                        />
                    </form>
                    <p>
                        <small>
                            Already have an account?{" "}
                            <Link
                                className="text-secondary font-bold"
                                to="/login"
                            >
                                Please Login
                            </Link>
                        </small>
                    </p>
                    <div className="divider">Or</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        class="btn btn-outline btn-secondary"
                    >
                        Continue with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
