import SlideBar from "../components/Slidebar"

const MainLayout = ({ children }) => {
    return (
        <>
            <div className="flex h-screen">
                <div className="slideBar hidden xl:block bg-[#f1f1f1] shadow-md w-[15%]">
                    <SlideBar />
                </div>
                <div className="childrenComponent bg-white p-4 w-[100%] xl:w-[85%] max-h-screen overflow-y-auto">
                    {children}
                </div>
            </div>
        </>
    )
}

export default MainLayout