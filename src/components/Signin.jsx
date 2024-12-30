import Section from "./Section";
import Heading from "./Heading";
 

const SignIn = () => {
  return (
    <Section id="sign-in ">
      <div className="container text-white">
        <Heading
          title="Welcome Back!"
          text="Sign in to your account and unlock the potential of AI-powered applications."
        />

        <div className="relative flex justify-center items-center">
          <div className="max-w-md w-full bg-n-7 p-8 rounded-3xl shadow-lg">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-n-3 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-n-6 rounded-xl text-n-3 bg-n-8 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-n-3 mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-3 border border-n-6 rounded-xl text-n-3 bg-n-8 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="********"
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-primary rounded border-n-6 focus:ring-primary"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-n-3"
                  >
                    Remember me
                  </label>
                </div>

                <div>
                  <a
                    href="#"
                    className="text-sm text-primary hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-primary text-white rounded-xl hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary"
              >
                Sign In
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-n-3">
              Don't have an account?{" "}
              <a href="#" className="text-primary hover:underline">
                Sign up here
              </a>
            </p>
          </div>
        </div>

        <Gradient />
      </div>
    </Section>
  );
};

export default SignIn;
