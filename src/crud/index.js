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
             nama : "",
             deskripsi : "",
             harga : 0,
             id : "",
        };

    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        //console.log("Produks: ", this.state);

        if (this.state.id === "") {
            this.setState({
                products: [
                    ...this.state.products,
                    {
                        id : this.state.products.length+1,
                        nama: this.state.nama,
                        deskripsi: this.state.deskripsi,
                        harga: this.state.harga
                    }
                ]
            });
        } else {
            const productSelainDipilih = this.state.products
            .filter( (product)=> product.id !== this.state.id )
            .map((filterProduct) => {
                return filterProduct
                
            })
            console.log(productSelainDipilih);

            this.setState({
                products: [
                    ...productSelainDipilih,
                    {
                        id : this.state.products.length+1,
                        nama: this.state.nama,
                        deskripsi: this.state.deskripsi,
                        harga: this.state.harga
                    }
                ]
            });
        }
        

        this.setState ({
            nama : "",
            deskripsi : "",
            harga : 0,
            id : "",
       });
    }

    editData = (id) => {
        console.log("ID : ", id)
        const productDipilih = this.state.products
        .filter( (product)=> product.id === id )
        .map((filterProduct) => {
            return filterProduct
        })
        console.log(productDipilih)

        this.setState ({
            nama : productDipilih[0].nama,
            deskripsi : productDipilih[0].deskripsi,
            harga : productDipilih[0].harga,
            id : productDipilih[0].id,
       });
    }

    render() {
        //console.log(this.state.products);
        return (
            <div>
                <NavbarMenu/>
                <div className="m-5">
                    <Tabel products={this.state.products} editData={this.editData}/>
                    <Formulir {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                </div>
                
            </div>
        )
    }
}
