import '../Css/Destination.css'
import { Component } from 'react'

class Destinationdata extends Component{
    render(){
        return(
        <div className={this.props.className}>
            <div className='desctext'>
                <h2>{this.props.head}</h2>
                <p>{this.props.text}</p>
            </div>
            <div className='image'>
                <img alt='Img' src={this.props.img1}></img>
                <img alt='Img' src={this.props.img2}></img>

            </div>
        </div>
        )
    }
}
//Destination
export default Destinationdata