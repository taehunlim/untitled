import React, {useState, useEffect} from 'react';
import axios from "axios";
import "./productdetail.scss"

import img from "../assets/img/front.png"
import img2 from '../assets/img/side.png'

const ProductDetail = () => {

    const [products, setProducts] = useState([])

    const getData = async () => {
        axios
            .get("/data.json")
            // .then(res => console.log(res.data.products))
            .then(res => {
                setProducts(res.data.products)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getData()
    },[])

    return (
        <div>
            <div className="pdpWrapper">
                <div className="pdpTop flex">
                    <div className="productImg">
                    </div>
                    <div className="productDetail center">
                        <div className="pdHeader">
                            <span className="upper"></span>
                            <h1>Trunk XL</h1>
                        </div>
                        <div className="pdPrice">
                            <span>1.530</span>
                        </div>
                        <div className="pdSize">Size Dropdown</div>
                        <div className="pdAddToCart">
                            <button>Purchase</button>
                        </div>
                        <div className="pdAvail">
                            <span className="upper">Limited Stock</span>
                        </div>
                        <div className="pdOptions flexJustifyCenter">
                            <div className="pdWishlist">Wishlist</div>
                            <div className="pdFindStore">Find In Store</div>
                        </div>
                        <div className="pdText">
                            <p>

                            </p>
                        </div>
                        <div className="pdAirline">See airline compatibility</div>
                        <div className="pdColors flexJustifyCenter">
                            <div>color1</div>
                            <div>color2</div>
                            <div>color3</div>
                        </div>
                    </div>
                </div>
                <div className="pdpBottom">
                    <div className="pdpSpecs">
                        <div className="specHeader center">
                            <span className="upper">Specification</span>
                            <h3>Refined to the very last detail</h3>
                        </div>
                        <div className="specDetail flex">
                            <div className="specImg">
                                <div className="specUnit upper">
                                    <span className="metric">Metric</span>
                                    <span className="imperial">Imperial</span>
                                </div>
                            </div>
                            <div className="specWire flexEnd">
                                <div className="wireLeft flex">
                                    <div className="txtRotate1">
                                        Height
                                    </div>
                                    <div className="txtRotate2">
                                        80cm
                                    </div>
                                </div>
                                <div className="wireCenter">
                                    <img src={img}/>
                                    <div className="centerMeasure flexJustifyCenter">
                                        <div className="measure">Width</div>
                                        <div>43,5 CM</div>
                                    </div>
                                </div>
                                <div className="wireRight">
                                    <img src={img2}/>
                                    <div className="flexJustifyCenter">
                                        <div className="measure">Depth</div>
                                        <div>46CM</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="specDetail">
                            Details
                        </div>
                    </div>
                    <div className="specPN upper center">
                        Product Number : 92585004
                    </div>
                </div>
                <div className="pdpKey flex">
                    <div className="keyImg">img</div>
                    <div className="pdpRecommend">pdpRecommend</div>
                </div>
            </div>
        </div>
    );

};

export default ProductDetail;
