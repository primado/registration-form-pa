
import check from "../assets/check.png";

export default function Success() {


    return (
        <div className="success font-serif bg-gray-300 min-h-screen">
            <div className="flex justify-center items-center py-[10rem]">
                <div className="max-w-[30rem] bg-white   rounded-xl  border-2 border-black">
                    <div className="">
                        <div className="description px-5 py-5">
                            <div className="flex flex-col">
                                <img 
                                    src={check} 
                                    alt=" success check icon"
                                    className="w-20 h-20 mx-auto"
                                 />
                                <h1 className="text-black text-2xl text-center font-semibold py-3">
                                    Thank you for registering for MLSA Ghana Days 2023
                                </h1>
                            </div>
                           <h2 className="font-medium text-base text-center mt-2 text-gray-600">Kindly check your email for a confirmational message.</h2>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

}



