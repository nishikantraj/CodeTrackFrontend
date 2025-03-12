import { PropsWithChildren } from "react"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({children}:PropsWithChildren) => {
  return (
    <div className="w-full min-h-screen flex flex-col">
        <Header/>

        <main className="flex-grow px-4 sm:px-6 md:px-15 py-2 bg-[#242424] bg-[radial-gradient(circle,_rgba(36,36,36,1)_0%,_rgba(24,24,24,1)_100%)]">
            {children}
        </main>

        <footer className="w-full">
          <Footer/>
        </footer>
    </div>
  )
}

export default Layout