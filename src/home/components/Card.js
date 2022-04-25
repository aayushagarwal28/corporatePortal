import React from 'react'
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';

const renderIcon= (icon)=>{
if(icon == "customers")
return <PeopleAltOutlinedIcon fontSize='medium' style={{color: "blue"}} className="font-size-24" />
else if(icon == "cards")
return <StorefrontOutlinedIcon  fontSize='medium' style={{color: "blue"}} className="font-size-24" />
else
return <BusinessCenterOutlinedIcon fontSize='medium' style={{color: "blue"}} className="font-size-24" />
}
export default function Card({cardInfo}) {
  return (
    <div className="col-md-4">
    <div className="card">
        <div className="card-body">
            <div className="media">
                <div className="media-body overflow-hidden">
                    <p className="text-truncate font-size-14 mb-2">{cardInfo.title}</p>
                    <h4 className="mb-0"><span id="customerTotal">{cardInfo.total}</span></h4>
                </div>
                <div className="text-primary">
                    {
                        renderIcon(cardInfo.icon)
                    }
                  
                </div>
            </div>
        </div>

        {/* Progress Bars   */}
        <div className="card-body border-top py-3">
            <div className="progress mb-3" style={{height: "3px"}}>
                <div className="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                <div className="progress-bar bg-success" role="progressbar" style={{width: "30%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div><div className="progress-bar bg-info" role="progressbar" style={{width: "20%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>

            <div className="mb-3" >
                <span className="" role="progressbar" style={{width: "30%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax=""> Full KYC</span>
                <span className="bg-success" role="progressbar" style={{width: "55%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"> E KYC</span><span className="bg-info" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"> Non KYC</span></div><div className="progress">
                <div className="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                <div className="progress-bar bg-success" role="progressbar" style={{width: "30%"}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                <div className="progress-bar bg-info" role="progressbar" style={{width: "20%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
            </div></div>
 
    </div>
</div>



  )
}
