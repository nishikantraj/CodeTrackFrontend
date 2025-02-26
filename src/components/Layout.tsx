import { PropsWithChildren } from "react"
import Header from "./Header"
import Footer from "./Footer"


const Layout = ({children}:PropsWithChildren) => {
  return (
    <div className="px-15 py-2">
        <Header/>

        <main>
            {children}
        </main>

        <footer className="mt-30">
          <Footer/>
        </footer>
    </div>
  )
}

export default Layout