import NavBar from "@/components/layout/NavBar";

export default function Layout ({children} : Readonly<{children : React.ReactNode}>){
    return (
        <main className="font-work-sans px-8 py-4 text-black bg-white">
            <NavBar/>
            {children}
        </main>
    )
}