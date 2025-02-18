import { PropsWithChildren } from "react"
import Header from "./Header"

const Layout = ({children}:PropsWithChildren) => {
  return (
    <div className="px-10 py-5 border-2 border-red-500">
        <Header/>

        <main>
            {children}
        </main>

        <footer className="flex justify-center items-center p-4">
            <div>
                <p className="font-bold tracking-tight">Made with ❤️ by <a href="https://github.com/nishikantraj" target="_blank"><span className="text-blue-500">Nishikant</span></a></p>
            </div>
        </footer>
    </div>
  )
}

export default Layout