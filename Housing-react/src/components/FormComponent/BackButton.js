import React from 'react'
import {Button} from '@material-ui/core'
import {useHistory} from 'react-router-dom'

function BackButton() {

    const history =  useHistory()
    return (
        <div>
            <Button  onClick={() => {history.push('/buy/search')}}/>
        </div>
    )
}

export default BackButton
