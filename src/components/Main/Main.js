import React from 'react'
import './Main.css'
import Navigation from './Navigation/Navigation'
import Movies from './Movies/Movies'

class Main extends React.Component{
    render(){
        return(
            <section className='main'>
                <Navigation />
                <Movies />
            </section>
        )
    }
}
    
export default Main