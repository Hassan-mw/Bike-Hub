import React from "react";

const Page = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center">
            {/* Header */}
            <header className="bg-white shadow-md p-4 w-full flex justify-between items-center">
                <h1 className="text-2xl font-bold">Bike-Hub</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="#" className="text-gray-600 hover:text-black">Bikes</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-black">Gears</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-black">Compare</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-black">FAQ</a></li>
                    </ul>
                </nav>
                <button className="border border-blue-500 px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-white">Login / Signup</button>
            </header>
            
            {/* Banner */}
            <div className="w-full h-40 bg-blue-500 flex items-center justify-center text-white text-3xl font-bold">
                Find the Perfect Bike for You!
            </div>

            {/* Main Content */}
            <main className="max-w-4xl w-full mt-10 p-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-semibold text-center mb-4">Bike Compare</h2>
                
                {/* Bike Selection */}
                <div className="flex justify-center gap-4">
                    <div className="w-1/2 border-2 border-gray-300 rounded-lg p-6 flex flex-col items-center">
                        <span className="text-gray-400 text-lg">Select a Bike</span>
                        <button className="mt-4 text-4xl text-blue-500">+</button>
                    </div>
                    <div className="flex items-center justify-center">
                        <span className="bg-red-500 text-white px-3 py-1 rounded-full">VS</span>
                    </div>
                    <div className="w-1/2 border-2 border-gray-300 rounded-lg p-6 flex flex-col items-center">
                        <span className="text-gray-400 text-lg">Select a Bike</span>
                        <button className="mt-4 text-4xl text-blue-500">+</button>
                    </div>
                </div>
                
                {/* Comparison Factors */}
                <div className="mt-6">
                    <h3 className="text-lg font-semibold">Comparison Factors</h3>
                    <ul className="mt-2 space-y-2">
                        <li>Price</li>
                        <li>Engine Power</li>
                        <li>Weight</li>
                        <li>Fuel Efficiency</li>
                        <li>Top Speed</li>
                        <li>Braking System</li>
                        <li>Comfort</li>
                        <li>Suspension</li>
                        <li>Design</li>
                        <li>Reliability</li>
                        <li>Resale Value</li>
                        <li>Maintenance Cost</li>
                        <li>Technology Features</li>
                        <li>Safety Features</li>
                        <li>Storage Capacity</li>
                        <li>Customization Options</li>
                        <li>Riding Modes</li>
                        <li>Fuel Tank Capacity</li>
                        <li>Torque</li>
                        <li>Seat Height</li>
                    </ul>
                </div>
                
                {/* Featured Bikes Section */}
                <div className="mt-8">
                    <h3 className="text-lg font-semibold">Featured Bikes</h3>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="border p-4 rounded-lg shadow-md text-center">
                            <p className="font-bold">Bike A</p>
                            <p className="text-gray-500">High performance</p>
                        </div>
                        <div className="border p-4 rounded-lg shadow-md text-center">
                            <p className="font-bold">Bike B</p>
                            <p className="text-gray-500">Best mileage</p>
                        </div>
                    </div>
                </div>
                
                {/* Search Bar */}
                <div className="mt-8">
                    <input 
                        type="text" 
                        placeholder="Search for a bike..." 
                        className="w-full p-2 border rounded-lg shadow-sm"
                    />
                </div>

                {/* Reviews Section */}
                <div className="mt-8">
                    <h3 className="text-lg font-semibold">User Reviews</h3>
                    <div className="mt-4 space-y-4">
                        <div className="border p-4 rounded-lg shadow-md">
                            <p className="font-bold">John Doe</p>
                            <p className="text-gray-500">"Amazing bike! The performance is outstanding."</p>
                        </div>
                        <div className="border p-4 rounded-lg shadow-md">
                            <p className="font-bold">Jane Smith</p>
                            <p className="text-gray-500">"Great fuel efficiency and smooth ride."</p>
                        </div>
                    </div>
                </div>
            </main>
            
            {/* Footer */}
            <footer className="mt-10 bg-white text-center p-4 shadow-md w-full">
                <p className="text-gray-600">&copy; 2025 Bike-Hub. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Page;