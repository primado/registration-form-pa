
import check from "../assets/check.png";

export default function Success() {


    return (
        <div className="success font-serif bg-gray-300 min-h-screen">
            <div className="flex justify-center items-center py-[10rem] sm-425:py-0 sm-375:py-0 sm-320:py-0">
                <div className="max-w-[30rem] bg-white rounded-xl shadow-2xl sm-425:min-h-screen sm-425:rounded-none">
                    <div className="">
                        <div className="description px-5 py-5 sm-425:py-[10rem] sm-375:py-[10rem] sm-320:py-[10rem]">
                            <div className="flex flex-col ">
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



