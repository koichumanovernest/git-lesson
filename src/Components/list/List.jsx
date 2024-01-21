import React from 'react'

export const List = ({state}) => {
  return (
    <div>
      {state.map((el) =>{
        return(
          <div>
            <h2>{el.input1}</h2>
            <img src={el.input2} alt="logo" />
          </div>
        )
      })}
    </div>
  )
}
