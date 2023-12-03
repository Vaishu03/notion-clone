import { Navbar } from "./_components/navbar";

const Layout = ({
    children
}:{
    children: React.ReactNode;
}) => {
    return (
        <div className="h-full">
            <Navbar />
            <main className="h-full pt-20">
                {children}
            </main>
        </div>
    )
}

export default Layout;