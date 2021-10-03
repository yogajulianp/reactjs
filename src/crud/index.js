import React, { Component } from 'react'
import NavbarMenu from './NavbarMenu'
import './index.css'
import Tabel from './Tabel'
import Formulir from './Formulir'

export default class Crud extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             products : [],
             nama :
        }
    }
    


    render() {
        return (
            <div>
                <NavbarMenu/>
                <div className="m-5">
                    <Tabel/>
                    <Formulir/>
                </div>
                
            </div>
        )
    }
}
