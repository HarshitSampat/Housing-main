import React from 'react'
import { useHistory } from 'react-router-dom'


function MovingController() {
    const history = useHistory()
    return (
        <div>
             <div>
                    <div className="container mt-5 adminButtons">
                        <button className="ml-3 bg-dark text-light border" onClick
                        ={(e)=>{history.push('/housing/admin/User')}}>Users</button>
                        <button className="ml-3 bg-dark text-light border" onClick
                        ={(e)=>{history.push('/housing/admin/Property')}}>Properties</button>
                        <button className="ml-3 bg-dark text-light border" onClick
                        ={(e)=>{history.push('/housing/admin/PropertyManagement')}}>PropertyManagement Inquirey</button>
                        {/* <button className="ml-3 bg-dark text-light border" onClick
                        ={(e)=>{history.push('/housing/admin/Property')}}>PropertiesInquiry</button> */}
                        <button className="ml-3 bg-dark text-light border" onClick
                        ={(e)=>{history.push('/housing/admin/PackersAndMovers')}}>Packers And movers Inquiry</button>
                        <button className="ml-3 bg-dark text-light border" onClick
                        ={(e)=>{history.push('/housing/admin/Interior')}}>Interior Inquiry</button>
                    </div>
                </div>
        </div>
    )
}

export default MovingController
