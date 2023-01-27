import React from 'react'

function AppTodoList({ SetMyList, myList }) {
    console.log(myList)

    const handelClick = (index) => {
        const newList = [...myList]
        newList[index].complete = newList[index].complete ? false : true
        SetMyList(newList)
    }

    const removeObject = (index) => {
        const newList = [...myList]
        newList.splice(index, 1)
        SetMyList(newList)
    }

    return (
    <div>
        
        {myList.map((myList, index) => (
            <div key={index} > 
                <button onClick={() => {handelClick(index)}} >
                   <p style={{ textDecoration: (myList.complete ? 'line-through' : '')}}>{myList.value}</p> 
                </button>
                <button onClick={() => {removeObject(index)}}>x</button>
            </div>
        ))}
    </div>
  )
}

export default AppTodoList