import React from 'react'

function Span({error}) {
    return (
        <>
        <span className="ml-5" style={{
        color: 'red',
        }}>{error}</span>
        </>
    )
}

export default Span
