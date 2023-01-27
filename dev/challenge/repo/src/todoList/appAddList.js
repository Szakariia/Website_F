import React, {useState} from 'react'

function AppAddList({ SetMyList, myList }) {
    const [InputValue, SetInputValue] = useState("")

    const handelChange = (event) =>{
        SetInputValue(event.target.value)
    }

    const handelSubmit = (event) =>{
        if (!InputValue) return
        event.preventDefault();
        SetMyList([...myList, {
            complete : false,
            value : InputValue
        }])
        SetInputValue("") // clear the value
    }


return (
    <div>
        <form onSubmit={handelSubmit}>
            <input onChange={handelChange} value={InputValue}></input>
            <button> addToList</button>
        </form>
    </div>
  )
}

export default AppAddList