import Aside from "../components/aside"
import Nav from "../components/nav"
import Footer from "../components/footer"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="md:container md:mx-auto">
      <Nav />
      <div className="flex">
        <Aside />
        <div className="w-full">
          {children}
        </div>
      </div>
      <div className="w-full">
        <Footer />        
      </div>

    </div>
  )
}