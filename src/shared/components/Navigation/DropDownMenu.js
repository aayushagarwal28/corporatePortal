import React from 'react'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PowerSettingsNewRoundedIcon from '@mui/icons-material/PowerSettingsNewRounded';
import Button from '../FormElements/Button';
import Backdrop from '../UIElements/Backdrop/Backdrop';

const DropDownOverlay = ()=>{
    return (
        <div className="dropdown-menu dropdown-menu-right" style={{display: "block"}} >
                    {/* item */}
                    <Button to="/"  className="dropdown-item" >
                       <PersonOutlineOutlinedIcon className="align-middle mr-1" fontSize='small' />
                         Profile
                    </Button>
                    
                    <Button to="/"  className="dropdown-item d-block" >
                        <span className="badge badge-success float-right mt-1">11</span>
                        <SettingsOutlinedIcon className="align-middle mr-1"  fontSize='small' />
                         Settings
                    </Button>
                    
                    <div className="dropdown-divider"></div>
                    <Button to="/"  className="dropdown-item text-danger" >
                    <PowerSettingsNewRoundedIcon className="align-middle mr-1 text-danger"  fontSize='small' />
                        Logout
                    </Button>
   </div>
    )
}
export default function DropDownMenu(props) {
  return (
    <>
    <DropDownOverlay {...props} />
    </>
  )
}
