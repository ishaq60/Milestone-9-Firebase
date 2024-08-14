import React, { useContext } from 'react';

import { useForm } from 'react-hook-form';
import UseAuth from '../UseAuth';

const Register = () => {
    const {createUser}=UseAuth()
    console.log(createUser);

    const {
        register,
        handleSubmit,
        
        formState: { errors },
      } = useForm()
      
      const onSubmit = (data) =>{
        // console.log(data
        const {email,password}=data;
        createUser(email,password)
        .then(result=>{
            console.log(result);
        })
      }
    return (
        <section className="p-6 dark:bg-gray-100 dark:text-gray-800">
        <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
            <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-50">
                <span className="block mb-2 dark:text-violet-600">Mamba design system</span>
                <h1 className="text-5xl font-extrabold dark:text-gray-900">Build it with Mamba</h1>
              
                <form onSubmit={handleSubmit(onSubmit)}  noValidate="" action="" className="self-stretch mt-5 space-y-3">
                    <div className='border border-b-gray-100'>
                        <label htmlFor="name" className="text-sm sr-only">Full Name</label>
                        <input id="name"  {...register("fullname", { required: true })} type="text" placeholder="Full Name"
                         className="w-full rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300" />
                           {errors.fullname && <span className='text-red-500'>This field is required</span>}
                    </div>
                    <div className='border border-b-gray-100'>
                        <label htmlFor="lastname" className="text-sm sr-only">Email address</label>
                        <input   id="lastname" {...register("email", { required: true })}   name='email' type="email" placeholder="Email address" 
                        className="w-full rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300" />
                          {errors.email && <span className='text-red-500'>This field is required</span>}
                    </div>
                    <div className='border border-b-gray-100'>
                        <label htmlFor="name" className="text-sm sr-only">Photo Url</label>
                        <input id="name"  type="text" placeholder="PhotoUrl"
                         className="w-full rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300" />
                        
                    </div>
                    <div className='border border-b-gray-100'>
                        <label htmlFor="name" className="text-sm sr-only">Password</label>
                        <input id="password" {...register("password", { required: true })} name='password' type="password"
                         placeholder="Password"  className="w-full rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300" />
                          {errors.password && <span className='text-red-500'>This field is required</span>}
                    </div>
                    <button type="submit" className="w-full py-2 font-semibold rounded btn btn-primary">Register</button>
                </form>
            </div>
            <img src="https://source.unsplash.com/random/480x360" alt="" className="object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500" />
        </div>
    </section>
    );
};

export default Register;