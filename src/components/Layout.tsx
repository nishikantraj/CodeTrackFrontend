import { PropsWithChildren } from "react"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({children}:PropsWithChildren) => {
  return (
    <div className="w-full min-h-screen flex flex-col">
        <Header/>

        <main className="flex-grow px-4 sm:px-6 md:px-15 py-2">
            {children}
        </main>

        <footer className="w-full">
          <Footer/>
        </footer>
    </div>
  )
}

export default Layout