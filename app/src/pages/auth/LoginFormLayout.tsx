import { LoginForm } from "./LoginForm"

export const LoginFormLayout = () => {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="absolute inset-0 bg-gray-300">
        <iframe
          width="100%"
          height="100%"
          title="map"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%&height=600&output=embed&q=京都府立大学"
          style={{
            filter: "grayscale(1) contrast(1.2) opacity(0.4)",
            border: "none",
          }}
        ></iframe>
      </div>
      <div className="container px-5 py-24 mx-auto flex">
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              ねっとCircleロゴ
            </span>
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">tmp tmp tmp tmp tmp tmp tmp tmp tmp tmp tmp tmp</p>
          <LoginForm />
        </div>
      </div>
    </section>
  )
}