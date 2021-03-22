import React from 'react'
//could be functional component
class HogTile extends React.Component {
    render() {
        return(
            //need to pass in anonymous function into onclick so handlclick isnt invoked 24/7 when trying
            //to pass through this.props.hog 
            <div className = "ui card" onClick= {() => this.props.handleClick(this.props.hog)} >
                <h1>{this.props.hog.name}</h1>
                <img src={this.props.formatHogName(this.props.hog.name)} alt=""></img>
                <br></br>
                </div>
        )
    }
}
export default HogTile