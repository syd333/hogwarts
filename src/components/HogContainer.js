import React, {Component} from 'react'
import HogTile from './HogTile'

class HogContainer extends Component {

    render(){
        return(
            <div>
                {this.props.hogs.map(hog => <HogTile hog={hog} formatHogName={this.props.formatHogName} handleClick={this.props.handleClick}/>)}
            </div>
        )
    }
}

export default HogContainer