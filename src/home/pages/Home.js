import React from 'react'
import Header from '../../shared/components/Navigation/Header'
import Card from '../components/Card'
import Sidebar from '../../shared/components/Navigation/Sidebar'
import './home.css'
import Breadrumb from '../../shared/components/Navigation/Breadrumb'
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
                                            <div id="high-chart" className="chartDiv" dir="ltr"  data-highcharts-chart="0"><div id="highcharts-j7c8ool-0" dir="ltr" className="highcharts-container chartContainer" ><svg version="1.1" className="highcharts-root highChartsStyle"  xmlns="http://www.w3.org/2000/svg" width="1021" height="400" viewBox="0 0 1021 400"><desc>Created with Highcharts 10.0.0</desc><defs><clipPath id="highcharts-j7c8ool-1-"><rect x="0" y="0" width="1001" height="375" fill="none"></rect></clipPath></defs><rect fill="#ffffff" className="highcharts-background" x="0" y="0" width="1021" height="400" rx="0" ry="0"></rect><rect fill="none" className="highcharts-plot-background" x="10" y="10" width="1001" height="375"></rect><rect fill="none" className="highcharts-plot-border" data-z-index="1" x="10" y="10" width="1001" height="375"></rect><g className="highcharts-series-group" data-z-index="3"></g><text x="511" text-anchor="middle" className="highcharts-title" data-z-index="4" style={{color: "rgb(51, 51, 51)", fontSize: "18px", fill: "rgb(51, 51, 51)"}} y="24"></text><text x="511" text-anchor="middle" className="highcharts-subtitle" data-z-index="4" style={{color: "rgb(102, 102, 102)", fill: "rgb(102, 102, 102)"}} y="24"></text><text x="10" text-anchor="start" className="highcharts-caption" data-z-index="4" style={{color: "rgb(102, 102, 102)", fill: "rgb(102, 102, 102)"}} y="397"></text><g className="highcharts-legend highcharts-no-tooltip" data-z-index="7"><rect fill="rgba(255,255,255,0.25)" className="highcharts-legend-box" rx="0" ry="0" x="0" y="0" width="8" height="8" visibility="hidden"></rect><g data-z-index="1"><g></g></g></g><text x="1011" className="highcharts-credits chartStyle" text-anchor="end" data-z-index="8" y="395" 
                    
                                            ></text></svg></div></div>
                                        </div>
                                    </div>

                                    <div className="card-body border-top text-center">
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <div className="d-inline-flex">
                                                    <h5 className="mr-2">120</h5>
                                                    <div className="text-success">
                                                        <i className="mdi mdi-menu-up font-size-14"> </i> 4.5%
                                                    </div>
                                                </div>
                                                <p className="text-muted text-truncate mb-0">This month</p>
                                            </div>

                                            <div className="col-sm-4">
                                                <div className="mt-4 mt-sm-0">
                                                    <p className="mb-2 text-muted text-truncate"><i className="mdi mdi-circle text-primary font-size-10 mr-1"></i> This Year :</p>
                                                    <div className="d-inline-flex">
                                                        <h5 className="mb-0 mr-2">4355 </h5>
                                                        <div className="text-success">
                                                            <i className="mdi mdi-menu-up font-size-14"> </i> +2.5 %
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="mt-4 mt-sm-0">
                                                    <p className="mb-2 text-muted text-truncate"><i className="mdi mdi-circle text-success font-size-10 mr-1"></i> Previous Year :</p>
                                                    <div className="d-inline-flex">
                                                        <h5 className="mb-0">900 </h5>
                                                    </div>
                                                </div>
                                            </div>

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
