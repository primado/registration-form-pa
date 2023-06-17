import { useEffect } from 'react'
import { useForm } from "react-hook-form";




export default function App() {


  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const watchAllFields = watch();

  useEffect(() => {
   const subscription =  watch((value, {name, type}) => console.log(value, name, type));
    return () => subscription.unsubscribe();
  }, [watch]);

  // write a useEffect to watch all fields and subcribe to it
  // how do i use watchAllFields in the code below
  // useEffect(() => {
  //   const subscription = watchAllFields((value, {name, type}) => console.log(value, name, type));
  //   return () => subscription.unsubscribe();
  // }, [watchAllFields]);
  // it returns an error that watchAllFields is not a function
  // how do i use watchAllFields in the code below




  const onSubmit = (data) => console.log(data);

  return (
    <div className="App font-serif bg-gray-300 min-h-screen">
      <div className="flex justify-center items-center py-[10rem]">
        <div className="max-w-[30rem]">
          <div className="flex flex-col bg-[#fff] rounded-md px-5 py-5">
            <div className="description mb-5">
              <h1 className="text-black text-2xl font-semibold py-3">MLSA Ghana Days 2023 </h1>
              <p className="font-medium text-sm text-justify ">MLSA Ghana Days is a 3-day event that brings together students, 
                developers, and tech enthusiasts to learn, network, and share ideas on the latest
                 technologies from Microsoft.
              </p>
              <h2 className="mt-3 text-lg font-semibold">Register here</h2>
            </div>

            <div className="">
              <form action="#" onSubmit={handleSubmit(onSubmit)}>
                <div className="form__group flex flex-col mb-5">
                  <label htmlFor="name">Full Name</label>
                  {watchAllFields && <input 
                    type="text" 
                    id="name" 
                    placeholder="Enter your full name"
                    className="border-2 outline-none border-gray-400 focus:ring-1 focus:ring-amber-500 rounded-md p-2"
                    {...register("full_name", { required: true, maxLength: 70 })}
                    aria-invalid={errors.full_name ? "true" : "false"}
                  />}
                  { errors.full_name?.type === "required" && ( <span role='alert' className="text-red-500 text-sm">This field is required</span> )}
                   
                </div>
                <div className="form__group flex flex-col mb-5">
                  <label htmlFor="email">Email Address</label>
                  { watchAllFields && <input 
                    type="email" 
                    id="email" 
                    placeholder="Enter your address" 
                    className="border-2 outline-none border-gray-400 focus:ring-1 focus:ring-amber-500 rounded-md p-2"
                    {...register("email", { required: true, pattern: /^\S+@\S+$/ })}
                    aria-invalid={errors.email ? "true" : "false"}
                  /> }
                  { errors.email?.type === "required" && ( <span role='alert' className="text-red-500 text-sm">This field is required</span> )}
                </div>
                <div className="form__group ">
                  <input 
                    type="submit" 
                    value="Submit"
                    className="bg-amber-500 w-full text-white font-semibold py-2 px-4 rounded-md cursor-pointer hover:bg-amber-600 active:bg-amber-700 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                </div>
              </form>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

