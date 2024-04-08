import React, { useState } from "react";
import { Link } from "react-router-dom";
import Image3 from "../image/Img1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight} from "@fortawesome/free-solid-svg-icons";


function Forgot_Password() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState("");
  
  
  
  const handleCheckInput = () => {
    const emailRegex = /\S+@\S+\.\S+/;
    const isEmailValid = emailRegex.test(email);

    if (isEmailValid && email.endsWith("@gmail.com")) {
      // email is valid and ends with "@gmail.com"
      setLoading(true);
    } else {
      // email is not valid or does not end with "@gmail.com"
      setLoading(false);
    }
  };
  const replaceEmail = (email) => {
    const username = email
      .split("@")[0]
      .toLowerCase()
      .replace(/[^a-z0-9]/gi, "");
    return email.replace(/^[^@]+/, username);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleCheckInput();
  };
  return (
    <div className=" flex  items-center h-screen w-full bg-gradient-to-b from-[#ff811adb] via-transparent to-transparent ">
      <div className=" flex   mx-auto bg-white shadow-xl">
        <div className="">
          <img src={Image3} alt="" className="h-[500px]" />
        </div>
        <div className="mx-20">
          <h1 className="text-yellow-900 text-[32px] font-medium pt-16 pb-10 drop-shadow-sm">
            Quên Mật Khẩu
          </h1>
          <p className="leading-6">
            Đừng lo ! Nó đã xảy ra. Vui lòng nhập địa chỉ email của bạn <br />
            và chúng tôi sẽ gửi OTP đến địa chỉ email này...
          </p>
          <form action="" onSubmit={(e) => handleSubmit(e)} className="mt-14">
            <div className="flex flex-col mb-2">
              <label className="font-semibold text-left text-lg mb-2" htmlFor="">
                Nhập Địa Chỉ Email
              </label>
              <input
                required
                className="px-4 py-2 border-2 border-[#afafaf] rounded-lg shadow-lg outline-none focus:border-primaryColor placeholder:text-lg text-lg"
                type="email"
                placeholder="youraccount@gmail.com"
                onChange={(e) => setEmail(replaceEmail(e.target.value))}
                value={email}
              />
            </div>
            <div>
            <p className="text-center m-5 leading-6 text-sm font-semibold">
                Trở Về 
                <Link to="/login" className=" text-sm text-yellow-900 font-bold hover:opacity-80"> Đăng Nhập 
                    <FontAwesomeIcon icon={faArrowCircleRight} className="mx-1"/>
                </Link>
            </p>
            <button className="py-2 bg-yellow-900 w-full mb-3 rounded-lg text-xl font-bold text-white opacity-100 active:opacity-80">
                  <span>Gửi Mã OTP</span>
              </button>
           </div>
          </form>
          
        </div>
      </div>
    </div>
  );
}

export default Forgot_Password;
