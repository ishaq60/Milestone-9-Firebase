import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';

const Registeration = () => {
  const { createUser,setuser,updateUserProfile } = useContext(AuthContext);

  const [error,seterror]=useState("")
  const [success,setsuccess]=useState("")

  
  const handelregisteration = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirm_password = e.target.confirmpassword.value;

    console.log("submitted");
    console.log(name, email, photo, password, confirm_password);
    seterror(" ")
    if( password.length <6){
        seterror("password at least six character")
        return
    }
    else if( ! /[A-Z]/.test(password)){
        seterror("Please add  capital letter in Password")
        return
    }

    else if (password !== confirm_password) {
      seterror("Passwords do not match");
      return;
    }
     

    createUser(email, password,image,name)
      .then((result) => {
        setuser(result.user);
        setsuccess("Successfully created user");
        updateUserProfile(name,image)
        .then(()=>{
          
        })
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen dark:bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl border border-gray-300 dark:bg-gray-50 dark:text-white">
        <h1 className="text-2xl font-bold text-center">Registration</h1>
        <form onSubmit={handelregisteration} noValidate="" action="" className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="name" className="block dark:text-gray-600">Name</label>
            <input type="text" name="name" id="name" placeholder="Your Name" className="w-full px-4 py-3 border border-gray-700 rounded-md" />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="photo" className="block dark:text-gray-600">Photo</label>
            <input type="text" name="photo" id="photo" placeholder="Your photo" className="w-full px-4 py-3 border border-gray-700 rounded-md" />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block dark:text-gray-600">Email</label>
            <input type="email" name="email" id="email" placeholder="Your email" className="w-full px-4 py-3 border border-gray-700 rounded-md" required />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block dark:text-gray-600">Password</label>
            <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 border border-gray-700 rounded-md" />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="confirmpassword" className="block dark:text-gray-600">Confirm Password</label>
            <input type="password" name="confirmpassword" id="confirmpassword" placeholder="Confirm Password" className="w-full px-4 py-3 border border-gray-700 rounded-md" />
          </div>
          <button className="block w-full p-3 text-center rounded-sm text-white bg-violet-500">Registration</button>
        </form>
        {
            error && <p className='text-red-700'>{error.message}</p>
        }
        {
            success && <p className=' text-green-500'>{success}</p>
        }
        <p>You have an account? Please <Link className="underline" to="/login">Login</Link></p>
      </div>
    </div>
  );
};

export default Registeration;
