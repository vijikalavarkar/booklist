import React from 'react'
import ReactDOM from 'react-dom'
import Books from './components/Books'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


function App(){
    return(
        <>
            <Books />
        </>
    )
}

ReactDOM.render(<App />,document.getElementById('root'))