import React, { useState, useEffect } from 'react'

function MouseEffectOnce() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('Mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition)
    }, [])

    return (
        <div>
            Hook X - {x}
            <br />
            Hook Y - {y}
        </div>
    )
}

export default MouseEffectOnce
