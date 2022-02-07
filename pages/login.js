import { getProviders, signIn } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

function Login({ providers }) {
  const router = useRouter();

  const onClickVisitor = () => {
    router.push({ pathname: "/" });
    if (typeof window !== "undefined") localStorage.setItem("isVisitor", true);
  };

  return (
    <div>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen  flex-col items-center justify-center space-y-4 bg-dark-300">
        <div className="flex w-56 items-center justify-center md:w-full ">
          <Image
            src="/airbnb/Airbnb_Logo_Be%CC%81lo_qe23zq.svg"
            width={400}
            height={400}
            objectFit="contain"
            objectPosition="left"
            loading="lazy"
          />
        </div>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button
              className="rounded-lg bg-rose-400 py-5 px-16 text-white"
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            >
              Login with {provider.name}
            </button>
          </div>
        ))}
        <button
          className="rounded-lg bg-indigo-400 py-5 px-16 text-white"
          onClick={onClickVisitor}
        >
          Login as a Visitor
        </button>
      </div>
    </div>
  );
}

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
