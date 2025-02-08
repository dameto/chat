import Link from "next/link";

interface InputProps {
  type: string;
  placeholder: string;
}

function Input({ type, placeholder }: InputProps) {
  return (
    <input
      className="bg-[#a6a6a6]/[0.025] placeholder-[#3C3C43]/[0.6] rounded-[20px] px-4 py-2 text-white/95 border-transparent outline-none leading-5 w-full"
      type={type}
      placeholder={placeholder}
    />
  );
}

export default function Login() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="bg-[#a6a6a6]/[0.025] p-10 flex flex-col justify-center items-center gap-8 rounded-[20px] w-96">
        <h1 className="text-white font-bold text-3xl w-full text-center">Login</h1>

        <div className="flex flex-col gap-2 w-full">
          <Input type="tel" placeholder="+1 1234 5678" />
          <Input type="password" placeholder="••••••••" />
          <button className="bg-[#a6a6a6]/[0.025] placeholder-[#3C3C43]/[0.6] rounded-[20px] px-4 py-2 text-white/95 border-transparent outline-none leading-5 hover:bg-[#a6a6a6]/[0.04] active:bg-[#a6a6a6]/[0.03]">Login</button>
        </div>

        <span className="text-white/60 font-light">Don't have an account? <Link href="/register" className="font-normal underline">Register</Link></span>
      </div>
    </div>
  );
}
