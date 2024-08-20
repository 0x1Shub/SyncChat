import React, { useState } from "react";
import Background from "../../assets/login2.png";
import Victory from "../../assets/victory.svg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleLogin = async () => {};

  const handleSignup = async () => {};

  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center">
      <div
        className="h-[80vh] bg-white border-2 border-white text-opacity-90 shadow-2xl w-[80vw] md:w-[90vw] lg:w-[70vw]
      xl:w-[60vw] rounded-3xl grid xl:grid-cols-2"
      >
        <div className="flex flex-col gap-10 items-center justify-center">
          <div className="flex items-center justify-center flex-col">
            <div className="flex items-center justify-center">
              <h1 className="text-5xl font-bold md:text-6xl">Welcome</h1>
              <img src={Victory} alt="Victory Emoji" className="h-[100px]" />
            </div>
            <p className="font-medium text-center">
              Fill in the details to get started with the best chat app
            </p>
          </div>
          <div className="flex items-center justify-center w-full">
            <Tabs className="w-3/4">
              <TabsList className="bg-transparent rounded-none w-full">
                <TabsTrigger
                  value="login"
                  className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300"
                >
                  Login
                </TabsTrigger>
                <TabsTrigger
                  value="signup"
                  className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300"
                >
                  Signup
                </TabsTrigger>
              </TabsList>
              <TabsContent className="flex flex-col gap-5 mt-10" value="login">
                <Input
                  placeholder="Email"
                  type="email"
                  className="rounded-full p-6"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  placeholder="Password"
                  type="password"
                  className="rounded-full p-6"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button className="rounded-full p-6" onClick={handleLogin}>
                  Login
                </Button>
              </TabsContent>
              <TabsContent className="flex flex-col gap-5 " value="signup">
                <Input
                  placeholder="Email"
                  type="email"
                  className="rounded-full p-6"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  placeholder="Password"
                  type="password"
                  className="rounded-full p-6"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Input
                  placeholder="Confirm Password"
                  type="password"
                  className="rounded-full p-6"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <Button className="rounded-full p-6" onClick={handleSignup}>
                  Signup
                </Button>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        <div className="hidden xl:flex justify-center items-center">
          <img src={Background} alt="background login" className="h-[700px]" />
        </div>
      </div>
    </div>

    // <div className="h-[100vh] w-[100vw] flex items-center justify-center overflow-hidden">
    //   <div
    //     className="h-[80vh] bg-white border-2 border-white text-opacity-90 shadow-2xl w-[90vw] md:w-[85vw] lg:w-[75vw]
    // xl:w-[65vw] rounded-3xl grid xl:grid-cols-2 overflow-hidden"
    //   >
    //     <div className="flex flex-col gap-8 items-center justify-center p-4 md:p-8">
    //       <div className="flex flex-col items-center justify-center">
    //         <div className="flex items-center justify-center">
    //           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
    //             Welcome
    //           </h1>
    //           <img
    //             src={Victory}
    //             alt="Victory Emoji"
    //             className="h-[50px] md:h-[75px] lg:h-[100px] ml-2"
    //           />
    //         </div>
    //         <p className="font-medium text-center text-sm md:text-base lg:text-lg">
    //           Fill in the details to get started with the best chat app
    //         </p>
    //       </div>
    //       <div className="flex items-center justify-center w-full">
    //         <Tabs className="w-full md:w-3/4">
    //           <TabsList className="bg-transparent rounded-none w-full">
    //             <TabsTrigger
    //               value="login"
    //               className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300"
    //             >
    //               Login
    //             </TabsTrigger>
    //             <TabsTrigger
    //               value="signup"
    //               className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300"
    //             >
    //               Signup
    //             </TabsTrigger>
    //           </TabsList>
    //           <TabsContent className="flex flex-col gap-5 mt-6" value="login">
    //             <Input
    //               placeholder="Email"
    //               type="email"
    //               className="rounded-full p-3 md:p-4 lg:p-5 w-full"
    //               value={email}
    //               onChange={(e) => setEmail(e.target.value)}
    //             />
    //             <Input
    //               placeholder="Password"
    //               type="password"
    //               className="rounded-full p-3 md:p-4 lg:p-5 w-full"
    //               value={password}
    //               onChange={(e) => setPassword(e.target.value)}
    //             />
    //             <Button
    //               className="rounded-full p-3 md:p-4 lg:p-5 w-full"
    //               onClick={handleLogin}
    //             >
    //               Login
    //             </Button>
    //           </TabsContent>
    //           <TabsContent className="flex flex-col gap-5 mt-6" value="signup">
    //             <Input
    //               placeholder="Email"
    //               type="email"
    //               className="rounded-full p-3 md:p-4 lg:p-5 w-full"
    //               value={email}
    //               onChange={(e) => setEmail(e.target.value)}
    //             />
    //             <Input
    //               placeholder="Password"
    //               type="password"
    //               className="rounded-full p-3 md:p-4 lg:p-5 w-full"
    //               value={password}
    //               onChange={(e) => setPassword(e.target.value)}
    //             />
    //             <Input
    //               placeholder="Confirm Password"
    //               type="password"
    //               className="rounded-full p-3 md:p-4 lg:p-5 w-full"
    //               value={confirmPassword}
    //               onChange={(e) => setConfirmPassword(e.target.value)}
    //             />
    //             <Button
    //               className="rounded-full p-3 md:p-4 lg:p-5 w-full"
    //               onClick={handleSignup}
    //             >
    //               Signup
    //             </Button>
    //           </TabsContent>
    //         </Tabs>
    //       </div>
    //     </div>
    //     <div className="hidden xl:flex justify-center items-center">
    //       <img
    //         src={Background}
    //         alt="background login"
    //         className="max-h-[80vh] object-contain"
    //       />
    //     </div>
    //   </div>
    // </div>
  );
};

export default Auth;
