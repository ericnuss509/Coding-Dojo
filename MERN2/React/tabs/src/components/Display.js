import React from 'react'

const Display = (props) => {
    const {tabs} = props
    let text = ""
    if(tabs === 1){
        text = "Tab #1 has been clicked."
    }else if(tabs === 2){
        text = "Tab #2 has been clicked."
    }else if(tabs === 3){
        text = "Tab #3 has been clicked."
    }else{
        text ="Click on a tab."
    }
    return(
        <>
            {text}
        </>
    )
    
}
export default Display