import React from 'react'

const Tabs = (props) => {
    const {tabs, setTabs} = props

    const clicked = e => {
        e.preventDefault()
        switch(e.target.name){
            case 'tab1' : setTabs(1)
            break
            case 'tab2' : setTabs(2)
            break
            case 'tab3' : setTabs(3)
        }
    }
    return (
        <div>
            <button onClick ={clicked} name = 'tab1'>Tab 1#</button>
            <button onClick ={clicked} name = 'tab2'>Tab 2#</button>
            <button onClick ={clicked} name = 'tab3'>Tab 3#</button>
        </div>
    )
}

export default Tabs

