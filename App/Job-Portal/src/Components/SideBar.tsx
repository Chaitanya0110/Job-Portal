function SideBar(){
    const jobTypes = ['Full-time', 'Part-time', 'Contract'];
    const featuredCompanies = [
        {name : 'DesignStudio', opeanings : '25'},
        {name : 'Tech Corp', opeanings : '10'},
        {name : 'Startup XYZ', opeanings : '5' }
    ];
    return (
        <aside className="w-1/4 bg-grey-100">
            <div className="bg-[#243146] p-6 rounded-lg shadow-md mb-6 backdrop-blur">
                <h4 className="text-lg font-bold mb-4 ">Job Filters</h4>
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2">Location</label>
                    <select className="w-full p-2 border rounded-md">
                        <option>All Location</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-semibold mb-2">Job Type</label>
                    {jobTypes.map(type => (
                        <div key={type} className="flex items-center mb-2">
                            <input type="checkbox" id = {type} className="mr-2" />
                            <label htmlFor={type} className="text-gray-200">{type}</label>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-[#243146] p-6 rounded-lg shadow-md bg-blend-saturation">
                <h4 className="text-lg font-bold mb-4">Featured Companies</h4>
                {featuredCompanies.map((company, idx) =>(
                    <div key={idx} className="mb-2">
                        <p className="font-semibold text-grey-800">{company.name}</p>
                        <p className="text-gray-400 text-sm ">{company.opeanings} open position</p>
                    </div>
                ))}

            </div>
        </aside>
    );
}

export default SideBar; 