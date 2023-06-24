import Aside from "@/app/components/aside"
import Nav from "@/app/components/nav"

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
        </div>
  )
}