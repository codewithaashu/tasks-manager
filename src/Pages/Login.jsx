import InputComponent from "@/components/custom/InputComponent";
import Loading from "@/components/custom/Loading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React, { useState } from "react";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  return (
    <>
      <div className="w-full min-h-screen flex items-center justify-center flex-col lg:flex-row bg-muted">
        {!loading ? (
          <div className="w-full md:w-auto flex gap-0 md:gap-40 flex-col md:flex-row items-center justify-center">
            {/* left side */}
            <div className="h-full w-full lg:w-2/3 flex flex-col items-center justify-center">
              <div className="w-full md:max-w-lg 2xl:max-w-3xl flex flex-col items-center justify-center gap-5 md:gap-y-10 2xl:-mt-20">
                <span className="flex gap-1 py-1 px-3 border rounded-full text-sm md:text-base bordergray-300 text-muted-foreground">
                  Manage all your task in one place!
                </span>
                <p className="flex flex-col gap-0 md:gap-4 text-4xl md:text-6xl 2xl:text-7xl font-black text-center text-primary">
                  <span>Cloud-Based</span>
                  <span>Task Manager</span>
                </p>

                <div className="cell">
                  <div className="circle rotate-in-up-left"></div>
                </div>
              </div>
            </div>

            {/* right side */}
            <div className="w-full md:w-1/3 p-4 md:p-1 flex flex-col justify-center items-center">
              <Card className="shadow-md w-full md:w-[400px] flex flex-col gap-y-8 bg-background px-10 pt-14 pb-14">
                <div className="">
                  <p className="text-primary text-3xl font-bold text-center">
                    Welcome back!
                  </p>
                  <p className="text-center text-base text-muted-foreground ">
                    Keep all your credential safe.
                  </p>
                </div>

                <div className="flex flex-col gap-y-4">
                  <InputComponent
                    field={"email"}
                    form={loginForm}
                    setForm={setLoginForm}
                    label={"Email"}
                    placeholder={"Enter your email here..."}
                    type={"email"}
                  />
                  <InputComponent
                    field={"password"}
                    form={loginForm}
                    setForm={setLoginForm}
                    label={"Password"}
                    placeholder={"Enter password here..."}
                    type={"password"}
                  />

                  <span className="text-sm text-gray-500 hover:text-primary hover:underline cursor-pointer">
                    Forget Password?
                  </span>

                  <Button className="w-full h-10  rounded-full">Login</Button>
                </div>
              </Card>
            </div>
          </div>
        ) : (
          <div className="py-5">
            <Loading />
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
