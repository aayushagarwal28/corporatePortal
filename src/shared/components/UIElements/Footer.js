import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
    <div className="container-fluid">
        <div className="row">
            <div className="col-sm-6">
                {new Date().getFullYear()} © CashYear.
            </div>

        </div>
    </div>
   </footer>
  )
}
