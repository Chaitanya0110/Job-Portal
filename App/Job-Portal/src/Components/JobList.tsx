const jobs = [
  {
    role: 'Senior Frontend Developer',
    company: 'Pisco Inc.',
    location: 'India, USA',
    salary: '₹5L - ₹15L',
    posted: '2 days ago',
    description: 'Join our dynamic team to build cutting-edge web applications using React and TypeScript...',
    tags: ['React', 'TypeScript', 'Remote'],
  },
  {
    role: 'Product Manager',
    company: 'StartupXYZ',
    location: 'Delhi, Banguluru',
    salary: '₹20L - ₹50L',
    posted: '1 week ago',
    description: 'Lead product strategy and work with cross-functional teams to deliver innovative solutions...',
    tags: ['Strategy', 'Analytics', 'Full-time'],
  },
  {
    role: 'UX Designer',
    company: 'DesignStudio',
    location: 'Mumbai, New Delhi',
    salary: '₹8L - ₹35L',
    posted: '3 days ago',
    description: 'Create exceptional user experiences for our mobile and web applications...',
    tags: ['Figma', 'Prototyping', 'Hybrid'],
  },
];

function JobList(){
    return(
        <div className="flex-grow p-8 bg-[#1a1a2e]">
            <h3 className="text-xl font bold mb-4 text-white">Find Your Dream Job</h3>
            <p className="text-gray-200 mb-6">Discover thousands of opportunity from top companies worldwide.</p>
            {jobs.map((job, idx) => (
                <div key={idx} className="bg-gray-800 p-5 rounded-lg shadow-md mb-4 border-black text-amber-50">
                    <div className="flex justify-center items-start">
                        <div>
                            <h4 className="text-lg font-semibold"> {job.role} </h4>
                            <p className="text-grey-600">{job.company}.{job.location    }</p>
                        </div>
                        <div className="text-right">
                            <span className="font-bold text-grey-800">{job.salary}</span>
                            <p className="text-gray-500 text-sm">Posted {job.posted}</p>
                        </div>
                    </div>
                    <p className="text">{job.description}</p>
                    <div className="flex space-x-2 mt-4 ">
                        {job.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="bg-gray-600 text-white text-xs py-1 rounded-md p-2">{tag}</span>
                        ))}
                    </div>
                </div> 
            ))}
        </div>
    );
}

export default JobList;