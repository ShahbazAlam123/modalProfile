import React, { Component } from 'react'
export default class Modal extends Component {
  
state={
    datas:this.props.state.datas,
    val:this.props.state.val     
}


  render() {
    return (
     <div className='poppup'>
    
     {
        this.state.datas.map((item,index)=>{
            if(this.state.val===index+1){
                return(
        <div className="modalwrapper"  >
           
            <div className="modal">  
                  
               <div> Name : {item.name}</div>
               <div> Age :  {item.Age}</div>                
               <div> Email : {item.id}</div>             
               <div> status :  {item.status}</div>             
               <div> Gender :  {item.gender}</div>            
               <div> Add : Bangalore</div>
             </div>
             <div>
                <button onClick={this.props.togglePoppup} className='button'>X</button>
             </div>
          </div>
         
                )
            }
            return null;
            
        })
     }
        </div> 
    )
    
  }
}
