function NavigationBar(){
    return(
        <nav className="bg-[#1a1a2e] text-white p-4 flex justify-between items-center">
            <div className="flex items-center space-x-8">
                <h1 className="text-xl font-bold">JobPortal</h1>
                <ul className="flex space-x-6">
                    <li><a href="#" className="hover:text-gray-400">Home</a></li>
                    <li><a href="#" className="hover:text-gray-400">Jobs</a></li>
                    <li><a href="#" className="hover:text-gray-400">Companies</a></li>
                    <li><a href="#" className="hover:text-gray-400">About</a></li>
                    <li><a href="#" className="hover:text-gray-400">Contact</a></li>
                </ul>
            </div>
            <div className="flex items-center">
                <span className="text-2xl cursor-pointer">👤</span>
            </div>
        </nav>
    );
}

export default NavigationBar;