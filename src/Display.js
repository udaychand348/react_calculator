import React from 'react'

const Display = ({todos,deletehandler}) => {
  return (
    <div>
      {
        todos.map((todo,index) => <div>
          <h4 style={{color:"grey"}} key={index}>{todo} &nbsp; <button style={{color:"green",backgroundColor:"pink"}} onClick={()=>deletehandler(index)}> Delete </button></h4>
          </div>)
      }
    </div>
  )
}

export default Display
