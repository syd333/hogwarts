import React from 'react'
//make into functional component

class MainHog extends React.Component{
    render(){
       let { selectedHog, formatHogName } = this.props
        return(
            <div>
               <h1>{selectedHog.name}</h1> 
               <img src = {formatHogName(selectedHog.name)}></img>
               <ul>
               <li>specialty: {selectedHog.specialty}</li> 
                <li>weight: {selectedHog.weight}</li>
                <li>highest medal achieved: {selectedHog['highest medal achieved']}</li>
               </ul>
            </div>
        )
    }
}

export default MainHog