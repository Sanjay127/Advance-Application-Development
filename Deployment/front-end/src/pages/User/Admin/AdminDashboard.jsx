import "../../../assets/css/AdminDashboard.css";
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminSidebar from "./AdminSidebar";

const AdminDashboard = () => {
    const data = [
        {
            name: 'Free Applications',
            uv: 7000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Premium Applications',
            uv: 1000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Applicant',
            uv: 33,
            pv: 3908,
            amt: 2000,
        },
    ];

    return (
        <div>
            <main className='main-container-admin'>
                <div className='main-title-dash '>
                    <h1 className="text-center">DASHBOARD</h1>
                </div>
                <div className='main-cards-dash'>
                    <div className='card-admin bg-primary'>
                        <div className='card-inner'>
                            <h3>Applicant</h3>
                            <BsFillArchiveFill className='card_icon' />
                        </div>
                        <h3>10</h3>
                    </div>
                    <div className='card-admin bg-info'>
                        <div className='card-inner '>
                            <h3>Categories</h3>
                            <BsFillGrid3X3GapFill className='card_icon' />
                        </div>
                        <h3>2</h3>
                    </div>
                    <div className='card-admin bg-success'>
                        <div className='card-inner '>
                            <h3>Applications</h3>
                            <BsPeopleFill className='card_icon' />
                        </div>
                        <h3>33</h3>
                    </div>
                    <div className='card-admin bg-secondary'>
                        <div className='card-inner'>
                            <h3>Available Jobs </h3>
                            <BsFillBellFill className='card_icon' />
                        </div>
                        <h3>10</h3>
                    </div>
                </div>

                <div className='charts'>
                    <ResponsiveContainer width="90%" height="100%">
                        <BarChart
                            width={700}
                            height={300}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="pv" fill="#8884d8" />
                            <Bar dataKey="uv" fill="#82ca9d" />
                        </BarChart>
                    </ResponsiveContainer>

                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </main>
            <AdminSidebar></AdminSidebar>
        </div>
    );
}

export default AdminDashboard;
