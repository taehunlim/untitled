import React, {useState, useEffect} from 'react';

import CabinProduct from "../component/CabinProduct";
import EditionProduct from "../component/EditionProduct";
import './productdetail.scss';
import axios from 'axios';

const ProductList = () => {

    const [products, setProducts] = useState([])

    const getData = async () => {
        axios
            .get('/data.json')
            .then(res => {
                setProducts(res.data.products)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getData()
    })

    const handleChange = e => {

    }

    return (
        <div className="List">
            <header className="header">
                <div className="banner">
                    <nav className="navigation">
                        <div className="menu">

                        </div>
                    </nav>
                </div>
            </header>

            <main className="ListMain">
                <div className="ListTop">
                    <div className="ListFilter">
                        <div className="FilterToggle">
                            <button onChange={handleChange}>toggle</button>
                        </div>
                        <div className="TopSeller">
                            <div className="Seller">
                                <span className="SortBy">SORY BY</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="ListContainer">
                    <ul className="ListCabin">
                        <CabinProduct/>
                        {products.map((product) => (
                            <EditionProduct
                                name={product.name}
                                img={product.img}
                                secondImg={product.secondImg}
                                price={product.price}
                            />
                        ))}
                    </ul>
                </div>

            </main>
        </div>
    );
};

export default ProductList;
