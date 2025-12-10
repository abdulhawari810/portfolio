import { Mail } from 'lucide-react'

export default function Contact() {
  return (
    <>
      <div className="w-full h-[70vh] pt-10 flex flex-col items-center justify-center relative bg-slate-950">
        <div className="glow-layer" />
        <div className="flex flex-col absolute px-5">
          <h1 className="text-center text-slate-50 font-black text-2xl  ">
            contact us for build your web applications modern, fast, and scalable
          </h1>
        </div>
      </div>
      <div className="lg:px-20 md:px-20 px-5 lg:py-24 md:py-24 py-10 w-full flex lg:flex-row md:flex-row flex-col items-start justify-center gap-5">
        <div className="flex flex-col w-[50%]">
          <Mail className="w-10 h-10 text-slate-950" />
          <p className="lg:text-2xl md:text-2xl text-lg font-bold">
            For comissions and project inquiries, please email:
          </p>
          <span className="lg:text-3xl md:text-3xl text-2xl font-bold">
            abdulhawari810@gmail.com
          </span>
          <span className="lg:text-lg md:text-lg text-md text-slate-900 font-bold">
            Or send a message via this form
          </span>
        </div>
        <form className="flex flex-col gap-5 lg:mt-0 md:mt-0 mt-5 w-full">
          <h1 className="mb-5 font-bold text-2xl">Contact Me</h1>
          <div className="form-group flex items-center justify-center relative">
            <input
              autoComplete="off"
              type="text"
              className="peer w-[350px] h-11 p-5 text-slate-950 font-medium text-md border-b-[3px] border-b-slate-400 outline-0 focus:border-b-slate-950 not-placeholder-shown:border-b-slate-950"
              placeholder=" "
              name="username"
              id="username"
            />
            <label
              className="absolute left-5 text-md text-slate-500 font-medium translate-y-0 px-1 peer-focus:text-slate-950 peer-not-placeholder-shown:text-slate-950 peer-focus:translate-y-[-23px] peer-not-placeholder-shown:translate-y-[-23px] peer-focus:bg-slate-50 peer-not-placeholder-shown:bg-slate-50 peer-focus:left-2.5 peer-not-placeholder-shown:left-2.5 peer-focus:text-sm peer-not-placeholder-shown:text-sm"
              htmlFor="username"
            >
              Username
            </label>
          </div>
          <div className="form-group flex items-center justify-center relative rounded-lg">
            <input
              autoComplete="off"
              type="email"
              className="peer w-[350px] h-11 p-5 text-slate-950 font-medium text-md border-b-[3px] border-b-slate-400 outline-0 focus:border-b-slate-950 not-placeholder-shown:border-b-slate-950 not-placeholder-shown:outline-slate-950"
              placeholder=" "
              name="email"
              id="email"
            />
            <label
              className="absolute left-5 text-md text-slate-500 font-medium translate-y-0 px-1 peer-focus:text-slate-950 peer-not-placeholder-shown:text-slate-950 peer-focus:translate-y-[-23px] peer-not-placeholder-shown:translate-y-[-23px] peer-focus:bg-slate-50 peer-not-placeholder-shown:bg-slate-50 peer-focus:left-2.5 peer-not-placeholder-shown:left-2.5 peer-focus:text-sm peer-not-placeholder-shown:text-sm"
              htmlFor="email"
            >
              Email Address
            </label>
          </div>
          <div className="form-group flex items-center justify-center relative rounded-lg">
            <textarea
              type="email"
              className="peer w-[350px] lg:h-[200px] md:h-[200px] h-[150px] p-5 text-slate-950 font-medium text-md border-b-[3px] border-b-slate-400 outline-0 focus:border-b-slate-950 not-placeholder-shown:border-b-slate-950"
              placeholder=" "
              name="message"
              id="message"
            ></textarea>
            <label
              className="absolute top-5 left-5 text-md text-slate-500 font-medium translate-y-0 px-1 peer-focus:text-slate-950 peer-not-placeholder-shown:text-slate-950 peer-focus:translate-y-[-30px] peer-not-placeholder-shown:translate-y-[-30px] peer-focus:bg-slate-50 peer-not-placeholder-shown:bg-slate-50 peer-focus:left-2.5 peer-not-placeholder-shown:left-2.5 peer-focus:text-sm peer-not-placeholder-shown:text-sm"
              htmlFor="message"
            >
              Message
            </label>
          </div>
          <div className="my-5">
            <button className="lg:p-5 md:p-5 p-3.5 rounded-full lg:text-lg md:text-lg text-md bg-blue-600 text-slate-50 font-medium">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
