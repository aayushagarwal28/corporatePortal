import React from 'react'
import Button from '../FormElements/Button'

export default function Sidebar() {

    const pageItems=[{
        id: 1,
        title: "Customers"
    },{
        id: 2,
        title:"Prefund"
    },{
        id: 3,
        title:"Transactions"
    },
    {
        id: 4,
        title:"Cards"
    },
    {
        id: 5,
        title:"Bulk Upload"
    },{
        id: 6,
        title:"Report Issues"
    },
    {
        id: 7,
        title:"Client Services"
    }]

  return (
    <div className="vertical-menu mm-active">

    <div data-simplebar="init" className="h-100 mm-show"><div className="simplebar-wrapper" style={{margin: "0px;"}}><div className="simplebar-height-auto-observer-wrapper"><div className="simplebar-height-auto-observer"></div></div><div className="simplebar-mask"><div className="simplebar-offset" style={{right: "-17px", bottom: "0px;"}}><div className="simplebar-content-wrapper" style={{height: "100%;", overflow: "hidden scroll;"}}><div className="simplebar-content" style={{padding: "0px;"}}>

        {/* Sidemenu */}
        <div id="sidebar-menu" className="mm-active">
            {/* Left Menu Start */}
            <ul className="metismenu list-unstyled mm-show" id="side-menu">
                {/* Menu */}
                <li className="menu-title">Menu</li>

                <li className="">
                    <Button to="/" className="waves-effect" aria-expanded="true">
                        <i className="ri-dashboard-line"></i>
                        <span>Dashboard</span>
                    </Button>
                </li>

              {/* Pages */}

                <li className="menu-title">Pages</li>

                {pageItems.map((item,index)=>(
                <li className="mm-active" key={item.id}>
                    <Button to="/customer" className="waves-effect" aria-expanded="false">
                        <i className="ri-account-circle-line"></i>
                        <span>{item.title}</span>
                    </Button>
                    
                </li>
                ))}
                
               
            </ul>
        </div>
        {/* Sidebar */}
    </div></div></div></div><div className="simplebar-placeholder" style={{width: "auto;", height: "340px;"}}></div></div><div className="simplebar-track simplebar-horizontal" style={{visibility: "hidden;"}}><div className="simplebar-scrollbar" style={{transform: "translate3d(0px, 0px, 0px);", display: "none;"}}></div></div><div className="simplebar-track simplebar-vertical" style={{visibility: "visible;"}}><div className="simplebar-scrollbar" style={{height: "299px;", transform: "translate3d(0px, 0px, 0px);", display: "block;"}}></div></div></div>
</div>
  )
}
