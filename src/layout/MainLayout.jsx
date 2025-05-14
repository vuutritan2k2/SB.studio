import Navbar from "../components/Navbar"
import SlideBar from "../components/Slidebar"

const MainLayout = ({ children }) => {
    return (
        <>
            <div className="layout">
                <Navbar />
                <div className="flex">
                    <div className="slideBar relative hidden xl:block shadow-md w-[15%]">
                        <SlideBar />
                    </div>
                    <div className="childrenComponent bg-white pt-20 p-4 w-[100%] xl:w-[85%]">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainLayout