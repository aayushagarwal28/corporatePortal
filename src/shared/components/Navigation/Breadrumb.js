import React from 'react'
import Button from '../FormElements/Button'
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

export default function Breadrumb({title}) {

const style={
    display: "inline-block",
    paddingRight: "0.5rem"
}
  return (
    <div className="page-title-right">
    <ol className="breadcrumb m-0">
        <li style={style}>
            <Button to="/">CashYear</Button>
        </li>
        <ChevronRightOutlinedIcon fontSize='small' />
        <li style={style}  className=" active">{title}</li>
    </ol>
   </div>
  )
}
