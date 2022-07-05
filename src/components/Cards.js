import React, { Component } from 'react'
import {Mock} from './Mock'
import Modal from './Modal'
export default class Cards extends Component {
    state={
        isEditing:false,
        datas:Mock,
        val:''
    }
    
    togglePoppup=(val)=>{
        console.log(val)
        this.setState({
            isEditing:!this.state.isEditing,
            val:val
        })
    }


  render() {
    console.log(this.props.text)
    if(this.state.isEditing){
        return(
            <>
         <Modal togglePoppup={this.togglePoppup} state={this.state}/>
         <div className='grid' >
        {
    
           this.state.datas.map((data,index)=>{
     return(
         <div className='container' key={index+1} index={index+1} onClick={()=>{this.togglePoppup(index+1)}}>
        <div className='main'>
        <div>
            <img className='photo' src='https://sm.askmen.com/t/askmen_in/article/f/facebook-p/facebook-profile-picture-affects-chances-of-gettin_fr3n.1200.jpg' alt='profile'/>
        </div>
        <div className='form'>
                <div>
                    <div>id: {index+1}</div>
                <span>Name : </span>
                <span>{data.name}</span>
                </div>
                <div>
                <span>Email : </span>
                <span>{data.id}</span>
                </div>
                <div>
                <span>Gender : </span>
                <span>{data.gender}</span>
                </div>
        </div>
        </div>
      </div>
                )
           
            })
        }   
        
        </div>
      
    )
         </>
        )
      }
      else{
        return (
            <div className='grid' >
            {
        
               this.state.datas.map((data,index)=>{
         return(
             <div className='container' key={index+1} index={index+1} onClick={()=>{this.togglePoppup(index+1)}}>
            <div className='main'>
            <div>
                <img className='photo' src='https://sm.askmen.com/t/askmen_in/article/f/facebook-p/facebook-profile-picture-affects-chances-of-gettin_fr3n.1200.jpg' alt='profile'/>
            </div>
            <div className='form'>
                    <div>
                        <div>id: {index+1}</div>
                    <span>Name : </span>
                    <span>{data.name}</span>
                    </div>
                    <div>
                    <span>Email : </span>
                    <span>{data.id}</span>
                    </div>
                    <div>
                    <span>Gender : </span>
                    <span>{data.gender}</span>
                    </div>
            </div>
            </div>
          </div>
                    )
               
                })
            }   
            
            </div>
          
        )
      }
    
    
    
  }
}
