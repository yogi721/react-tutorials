import React from 'react'

function Preview(props) {

    const text = props.text.split('');

    return (
        <div className="border round p-3 mb-4">
            {
                text.map((s, i) => {
                    let color;
                    if (i < props.userInput.length) {
                        color = s === props.userInput[i] ? '#07b50d' : '#f5410a';
                    }
                    return <span key={i} style={{ color: color }}>{s}</span>
                })
            }
        </div>
    )
}

export default Preview
