import React, { useEffect, useState } from 'react'
import Header from '../../shared/components/Navigation/Header'
import Sidebar from '../../shared/components/Navigation/Sidebar'
import DataTable from 'react-data-table-component';
import Footer from '../../shared/components/UIElements/Footer';
import useApi from '../../shared/hooks/useApi';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import Breadrumb from '../../shared/components/Navigation/Breadrumb';

const columns = [
    {
        name: 'Customer Id',
        selector: row => row.customerId,
        sortable: true
    },
    {
        name: 'First Name',
        selector: row => row.firstName,
        sortable: true
    },
    {
        name: 'Middle Name',
        selector: row => row.middleName,
        sortable: true
    },
    {
        name: 'Last Name',
        selector: row => row.lastName,
        sortable: true
    },
    {
        name: 'Gender',
        selector: row => row.gender,
        sortable: true
    },
    {
        name: 'Address',
        selector: row => row.addressLine1,
        sortable: true
    },
    {
        name: 'Country',
        selector: row => row.addressCountry,
        sortable: true
    },
    {
        name: 'D.O.B',
        selector: row => row.dateOfBirth,
        sortable: true
    },
    {
        name: 'Email',
        selector: row => row.email,
        sortable: true
    },
    {
        name: 'City',
        selector: row => row.city,
        sortable: true
    }

];

/*
const customerdata = [
    {
        id: 1,
        firstName: 'ajay',
        middleName: '',
        lastName: 'agarwal',
        createdDate: '2022/11/28',
        kycStatus: 'E KYC'
    },
    {
        id: 2,
        firstName: 'amit',
        middleName: '',
        lastName: 'jain',
        createdDate: '2021/11/21',
        kycStatus: 'Full KYC'
    },
    {
        id: 3,
        firstName: 'raj',
        middleName: 'pratap',
        lastName: 'singh',
        createdDate: '2021/05/12',
        kycStatus: 'Full KYC'
    }
]
*/

export default function Customer() {

    const [customersData, setCustomersData] = useState([]);
    const {isLoading,error,sendRequest,clearError} = useApi();

    useEffect(() => {
        fetchCustomerList();
     
    }, [])
    
    const fetchCustomerList= async()=>{
       
        try{
        const responseData= await sendRequest("https://626284bc005a66e1e3a8eb6e.mockapi.io/customers/list",'GET',{},null);
        setCustomersData(responseData?.customers);
         }
        catch(err){
           console.log("No data found"); 
        }
    }
    return (
        <>
        {isLoading && <LoadingSpinner asOverlay/>}
        <div id="layout-wrapper">

            <Header />

            {/* ========== Left Sidebar Start ========== */}
            <Sidebar />
            {/* Left Sidebar End */}


            {/* Start right Content here */}
            <div className="main-content">

                <div className="page-content">
                    <div className="container-fluid">

                        {/* start page title */}
                        <div className="row">
                            <div className="col-12">
                                <div className="page-title-box d-flex align-items-center justify-content-between">
                                    <h4 className="mb-0">Customer</h4>

                                    <Breadrumb title={"Customer"} />

                                </div>
                            </div>
                        </div>
                        {/* end page title */}
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">

                                        <h4 className="card-title">List of Customers</h4>
                                        <p className="card-title-desc">
                                        </p>

                                            <DataTable
                                                columns={columns}
                                                data={customersData}
                                                pagination
                                            
                                            />

                                      

                                    </div>
                                   
                                </div>
                            </div>
                        </div>

                    </div> {/* container-fluid */}
                </div>
                {/* End Page-content */}

                <Footer />
            </div>


        </div>
        </>

    )
}
