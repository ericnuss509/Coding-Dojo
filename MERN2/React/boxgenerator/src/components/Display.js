import React from "react"

const Display = (props) => {
    const {list} = props
    return(
        <div>
            {list.map((TONES) => <div style ={{height: "500px", width: "300px", background: TONES}}></div>)}
        </div>
    )

}
export default Display