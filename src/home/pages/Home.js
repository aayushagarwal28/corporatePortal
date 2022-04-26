import React from 'react'
import Header from '../../shared/components/Navigation/Header'
import Card from '../components/Card'
import Sidebar from '../../shared/components/Navigation/Sidebar'
import './home.css'
import Breadrumb from '../../shared/components/Navigation/Breadrumb'
import HighChart from '../components/HighChart'
//import '../../assets/css/app.css'
//import '../../assets/css/icons.min.css'
export default function Home() {

    const cardItems=[{
        id: 1,
        title: "Total Customers",
        total: 900,
        icon: "customers"

    },{
        id: 2,
        title: "Total Cards",
        total: 43,
        icon: "cards"

    },{
        id: 3,
        title: "Total Transactions",
        total: 340,
        icon: "transactions"

    }]
    return (
        <div id="layout-wrapper">

            <Header />

            {/* ========== Left Sidebar Start ========== */}
            <Sidebar/>
            {/* Left Sidebar End */}

            {/* Start right Content here */}
            <div className="main-content">

                <div className="page-content">
                    <div className="container-fluid">

                        {/* start page title */}
                        <div className="row">
                            <div className="col-12">
                                <div className="page-title-box d-flex align-items-center justify-content-between">
                                    <h4 className="mb-0">Dashboard</h4>

                                    {/* Breadcrumb */}
                                    <Breadrumb title={"Dashboard"} />


                                </div>
                            </div>
                        </div>
                        {/* end page title */}
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="row">
                                   
                                   {cardItems.map((card,index)=>(
                                      <Card cardInfo={card}/> 
                                   ))}


                                </div>
                                {/* end row */}

                                <div className="card">
                                    <div className="card-body">

                                        <h4 className="card-title mb-4">Transaction Analytics</h4>
                                        <div style={{position: "relative"}}>
                                            <HighChart />
                                           
                                        </div>
                                    </div>

                                   
                                </div>
                            </div>


                        </div>


                        {/* end row */}

                    </div> {/* container-fluid */}
                </div>

            
            </div>


        </div>

    )
}
