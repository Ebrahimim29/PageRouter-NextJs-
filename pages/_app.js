import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
  <div className="flex flex-col bg-amber-500 m-4 justify-center items-center">

    <h1 className="m-8 text-3xl">Header</h1>

    <Component {...pageProps} />

    <h1 className="m-8 text-3xl">Footer</h1>    
  </div>
  )

}
