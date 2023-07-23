import { useState } from "react";
import LineInput from "../Components/Input/LineInput";
export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <div className="flex justify-center gap-2">
      <h1>LOGIN</h1>
      <LineInput
        input={email}
        setInput={setEmail}
        placeholder="이메일을 입력하세요"
      />
      <LineInput
        input={password}
        setInput={setPassword}
        placeholder="비밀번호를 입력하세요"
      />
    </div>
  );
}
