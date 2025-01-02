import { LoginForm } from "./LoginForm"

export const LoginFormLayout = () => {
  return (
    <section className="h-screen w-full bg-cover bg-center bg-no-repeat bg-[url('../../../public/IMG_2925.jpg')]">
      {/* フレックスボックスを使用して親要素を中央揃え */}
      <div className="h-full w-full flex items-start justify-center pt-32">
        <div className="lg:w-1/3 md:w-1/2 max-w-lg bg-[rgb(12,13,40)] rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <img
            src="../../../public/nessalogo.png"
            alt="netcircle official logo"
          />
          <LoginForm />
        </div>
      </div>
    </section>
  )
}