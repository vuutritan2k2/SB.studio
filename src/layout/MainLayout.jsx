import Navbar from "../components/Navbar"
import SlideBar from "../components/Slidebar"
import Footer from "../components/Footer"

const MainLayout = ({ children }) => {
    return (
        <>
            <div className="layout">
                <Navbar />
                <div className="flex">
                    <div className="slideBar relative hidden xl:block shadow-md w-[15%]">
                        <div className="fixed w-[15%] bg-[#f1f1f1] px-4 pt-20 h-screen">
                            <SlideBar />
                        </div>
                    </div>
                    <div className="childrenComponent bg-white pt-17 p-4 w-[100%] xl:w-[85%]">
                        {children}
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainLayout