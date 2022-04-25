import React, { useState } from 'react'
import rmicon from "../../../assets/images/rmicon.png";
import CashYearoffwhite from '../../../assets/images/cashyearoffwhite.png'
import Avatar from "../../../assets/images/users/avatar-2.jpg"
import Input from '../FormElements/Input';
import Button from '../FormElements/Button';
import { useForm } from '../../hooks/useForm';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';

import DropDownMenu from './DropDownMenu';


const initialFormState = {
    //validity and value of individual inputs
    inputs: {
      search: {
        value: '',
        isValid: false
      }
    },
    isValid: false //overall validity of form 
  }


export default function Header() {

    const [formState,inputHandler]= useForm(initialFormState.inputs,initialFormState.isValid);
    const [showDropDown, setshowDropDown] = useState(false);

    const toggleDropDown=()=>{
        console.log("called toggleDropDown");
       setshowDropDown(prevShow => !prevShow);
    }

  return (
    <header id="page-topbar">
    <div className="navbar-header">
        <div className="d-flex">
            {/* Logo */}
            <div className="navbar-brand-box">

                <Button to="/" className="logo logo-light">
                    <span className="logo-sm">
                        <img src={rmicon} alt="" height="40"></img>
                    </span>
                    <span className="logo-lg">
                        <img src={CashYearoffwhite} alt="" height="50" style={{paddingTop: "10"}}></img>
                    </span>
                </Button>
            </div>

            {/* Three dots Button */}
            <Button  className="btn btn-sm px-3 font-size-24 header-item waves-effect" id="vertical-menu-btn">
                 <ListOutlinedIcon fontSize='medium' className=' align-middle' />
               
            </Button>

            {/* App Search */}
            <form className="app-search d-none d-lg-block">
                <div className="position-relative">
                  
                    <Input element ="input" id="search"className="form-control"  type="text" placeholder="Search..." inputHandler={inputHandler} />
                  
                </div>
            </form>

            
        </div>

        <div className="d-flex">

             {/* Logo */}
            <div className="dropdown d-inline-block d-lg-none ml-2">
                <Button className="btn header-item noti-icon waves-effect" id="page-header-search-dropdown">
                   {/* <i className="ri-search-line"></i> */}
                   <SearchIcon fontSize="small" />
                </Button>

            {/* Search */}
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0" aria-labelledby="page-header-search-dropdown">
        
                    <form className="p-3">
                        <div className="form-group m-0">
                            <div className="Input-group">
                                <Input element ="input" type="text" className="form-control" placeholder="Search ..." inputHandler={inputHandler}/>
                                <div className="Input-group-append">
                                    <Button className="btn btn-primary" type="submit"><i className="ri-search-line"></i></Button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

           {/* Full screen */}
            <div className="dropdown d-none d-lg-inline-block ml-1">
                <Button type="button" className="btn header-item noti-icon waves-effect" data-toggle="fullscreen">
                    <i className="ri-fullscreen-line"></i>
                </Button>
            </div>

            <div className="dropdown d-inline-block">
                <Button type="button" className="btn header-item noti-icon waves-effect" id="page-header-notifications-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {/* <i className="ri-notification-3-line"></i> */}
                    <NotificationsNoneOutlinedIcon fontSize="medium" />
                    <span className="noti-dot"></span>
                </Button>
                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0" aria-labelledby="page-header-notifications-dropdown">
                    <div className="p-3">
                        <div className="row align-items-center">
                            <div className="col">
                                <h6 className="m-0"> Notifications </h6>
                            </div>
                            <div className="col-auto">
                                <Button to="/" className="small"> View All</Button>
                            </div>
                        </div>
                    </div>
                    <div data-simplebar="init" style={{maxHeight: "230px;"}}><div className="simplebar-wrapper" style={{margin: "0px"}}><div className="simplebar-height-auto-observer-wrapper"><div className="simplebar-height-auto-observer"></div></div><div className="simplebar-mask"><div className="simplebar-offset" style={{right: "0px", bottom: "0px"}}><div className="simplebar-content-wrapper" style={{height: "auto", overflow: "hidden"}}><div className="simplebar-content" style={{padding: "0px"}}>
                        
                    </div></div></div></div><div className="simplebar-placeholder" style={{width: "0px;", height: "0px;"}}></div></div><div className="simplebar-track simplebar-horizontal" style={{visibility: "hidden"}}><div className="simplebar-scrollbar" style={{transform: "translate3d(0px, 0px, 0px);", display: "none;"}}></div></div><div className="simplebar-track simplebar-vertical" style={{visibility: "hidden;"}}><div className="simplebar-scrollbar" style={{transform: "translate3d(0px, 0px, 0px)", display: "none"}}></div></div></div>
                    <div className="p-2 border-top">
                        <a className="btn btn-sm btn-link font-size-14 btn-block text-center" href="javascript:void(0)">
                            <i className="mdi mdi-arrow-right-circle mr-1"></i> View More..
                        </a>
                    </div>
                </div>
            </div>

            <div className="dropdown d-inline-block user-dropdown">
                <Button onClick={toggleDropDown} type="button" className="btn header-item waves-effect" id="page-header-user-dropdown">
                    <img className="rounded-circle header-profile-user" src={Avatar} alt="Header Avatar"></img>
                    <span className="d-none d-xl-inline-block ml-1">Amit</span>
                    <ArrowDropDownIcon  fontSize="small" />

                    {/*<i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i> */}
                </Button>
                
                {showDropDown && <DropDownMenu showDropDown={showDropDown}  onClick={toggleDropDown} />}

            </div>

            

        </div>
    </div>
</header>
  )
}
