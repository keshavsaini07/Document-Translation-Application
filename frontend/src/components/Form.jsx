
export default function Form() {
  return (
    <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-200 overflow-hidden">
      <h1 className="text-5xl font-semibold">Welcome Back</h1>

      <p className=" font-medium text-lg text-gray-500 mt-4">
        Welcome Back! Please enter your details.
      </p>

      <div className="mt-8">
        <div>
          <label className="text-lg font-medium">Email</label>
          <input
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
            placeholder=" Enter your email"
          />
        </div>
        <div>
          <label className="text-lg font-medium">Password</label>
          <input
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
            placeholder=" Enter your password"
            type="password"
          />
        </div>
        <div className="mt-8 flex justify-between items-center">
          <div>
            <input type="checkbox" id="remember" />
            <label className="ml-2 font-medium text-base">
              Remember for 30 days
            </label>
          </div>
          <button className="font-medium text-base text-[#5228f5]">
            Forgot password
          </button>
        </div>
        <div className="mt-8 flex flex-col gap-y-4">
          <button className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-[#5228f5] text-white text-lg font-bold">
            Sign in
          </button>
          <button className="flex rounded-xl py-3 border-2 border-gray-200 items-center justify-center gap-2 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all">
            <svg
              aria-hidden="true"
              className="native svg-icon iconGoogle"
              width="24"
              height="24"
              viewBox="0 0 18 18"
            >
              <path
                fill="#4285F4"
                d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18Z"
              ></path>
              <path
                fill="#34A853"
                d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17Z"
              ></path>
              <path
                fill="#FBBC05"
                d="M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18l2.67-2.07Z"
              ></path>
              <path
                fill="#EA4335"
                d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.77 4.77 0 0 1 4.48-3.3Z"
              ></path>
            </svg>
            Sign in with Google
          </button>
        </div>
        <div className="mt-8 flex justify-center items-center">
          <p className="text-black font-medium text-base">
            Dont have an account?
          </p>
          <button className="text-violet-500 text-base font-medium ml-2">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}
