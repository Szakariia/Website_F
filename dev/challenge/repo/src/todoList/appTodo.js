import React, { useState } from 'react'
import AppAddList from './appAddList'
import AppTodoList from './appTodoList'

function AppTodo() {
    const [myList, SetMyList] = useState([])

    // console.log(myList)
    return (
        <div>
            <p >TODO LIST</p>
            <AppTodoList SetMyList={SetMyList} myList={myList}/>
            <AppAddList SetMyList={SetMyList} myList={myList}/>
        </div>
  )
}
export default AppTodo