import { useState } from "react";
import Button from "../Components/Button/Button";

export default function Header() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="bg-j-navy px-4 py-2 flex justify-between">
      <img className="w-44" src="image/logo.png" alt="logo" />
      {isLogin ? (
        <div
          className="w-11 bg-j-lemon rounded-full"
          onClick={() => {
            setIsLogin(!isLogin);
          }}
        ></div>
      ) : (
        <Button
          text="Login"
          className="my-1"
          onClick={() => {
            setIsLogin(!isLogin);
          }}
        />
      )}
    </div>
  );
}
