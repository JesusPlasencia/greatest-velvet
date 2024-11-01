const Dashboard = () => {
    const user = "John Doe"; // You can replace this with dynamic user data later.

    return (
        <div className='p-8'>
            <h1 className="text-3xl font-bold mb-4">Welcome, {user}!</h1>

            {/* Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-2">Total Sales</h2>
                    <p className="text-2xl font-bold text-green-500">$10,000</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-2">Active Users</h2>
                    <p className="text-2xl font-bold text-blue-500">1,024</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-2">New Orders</h2>
                    <p className="text-2xl font-bold text-yellow-500">76</p>
                </div>
            </div>

            {/* Table Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
                <table className="w-full table-auto">
                    <thead>
                        <tr>
                            <th className="border-b-2 p-3 text-left">Order ID</th>
                            <th className="border-b-2 p-3 text-left">Customer</th>
                            <th className="border-b-2 p-3 text-left">Amount</th>
                            <th className="border-b-2 p-3 text-left">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border-b p-3">#12345</td>
                            <td className="border-b p-3">Alice</td>
                            <td className="border-b p-3">$150</td>
                            <td className="border-b p-3 text-green-500">Completed</td>
                        </tr>
                        <tr>
                            <td className="border-b p-3">#12346</td>
                            <td className="border-b p-3">Bob</td>
                            <td className="border-b p-3">$200</td>
                            <td className="border-b p-3 text-yellow-500">Pending</td>
                        </tr>
                        <tr>
                            <td className="border-b p-3">#12347</td>
                            <td className="border-b p-3">Charlie</td>
                            <td className="border-b p-3">$300</td>
                            <td className="border-b p-3 text-red-500">Cancelled</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;
