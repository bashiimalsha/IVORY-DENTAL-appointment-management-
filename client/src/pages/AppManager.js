import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { SearchOutlined } from '@ant-design/icons';
import axios from 'axios';
import {  Table, message } from 'antd';
//import jsPDF from 'jspdf';
//import 'jspdf-autotable';

const AppManager = () => {
  const [appointments, setAppointments] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = date.toISOString().split('T')[0];
    return formattedDate;
  };

  useEffect(() => {
    const fetchAppointmentsData = async () => {
      try {
        const response = await axios.get('http://localhost:3002/api/patient/get-appointment');
        setAppointments(response.data);
      } catch (error) {
        message.error('Failed to fetch Appointment data');
        console.error(error);
      }
    };

    fetchAppointmentsData();
  }, []);

  // Handle Search
  const handleSearch = async () => {
    const results = appointments.filter((item) => item.Name.toLowerCase().includes(searchQuery.toLowerCase()));
    setAppointments(results);
  };

  /* Reporter function
  const generatePDF = () => {
    const doc = new jsPDF();
    const tabledata = appointments.map((item) => [item.Name, item.phoneNumber, item.email, item.service, item.doctor, formatDate(item.date)]);
    doc.autoTable({
      head: [['Name', 'Phone', 'Email', 'Service', 'Doctor', 'Date']],
      body: tabledata,
    });
    doc.save('Appointments.pdf');
  };
*/
  const columns = [
    {
      title: 'Name',
      dataIndex: 'Name',
      key: 'Name',
    },
    {
      title: 'Phone',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Service',
      dataIndex: 'service',
      key: 'service',
    },
    {
      title: 'Doctor',
      dataIndex: 'doctor',
      key: 'doctor',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: (date) => <span>{formatDate(date)}</span>,
    },
  ];

  return (
    <Layout>
      <h1 className="page-title">Appointments List</h1>
     
      <div className="search">
        <input
          className="searchInput"
          placeholder=" Search by Name"
          prefix={<SearchOutlined />}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ width: '250px', height: '30px', border: 'none', boxShadow: 'none', borderRadius: '50px', marginLeft: '15px' }}
        />
        <SearchOutlined style={{ fontSize: '20px', cursor: 'pointer', padding: '2.5px' }} onClick={handleSearch} />
      </div>
      <Table columns={columns} dataSource={appointments.map((appointment) => ({ ...appointment, key: appointment._id }))} />
    </Layout>
  );
};

export default AppManager;
