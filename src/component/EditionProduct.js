import React, {useState} from 'react';
import "./editionproduct.scss";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons'

const EditionProduct = (props) => {

    const [isMouseOver, setIsMouseOver] = useState(false)
    const [heartOver, setHeartOver] = useState(false)

    const handleMouseOver = e => {

    }

    return (
        <li className="CabinLimited">
            <div className="LimitedThumb">
                <div className="LimitedBody">
                    <a className="ProductLink">
                        <div className="ProductImage">
                            <img
                                src={ isMouseOver === true ? props.secondImg : props.img}
                                className="LimitedImage"
                                onMouseEnter={handleMouseOver}
                                onMouseOut={() => setIsMouseOver(false)}
                                alt=""
                            />
                        </div>
                        <div className="ProductCat">DIOR AND RIMOWA</div>
                        <div className="ProductRyme">{props.name}</div>
                    </a>

                    <div className="ProductPrice">
                        <span>{props.price}</span>
                    </div>
                    <div className="ProductPromo"></div>
                </div>
                <div className="LimitedWish">
                    <FontAwesomeIcon icon={faHeart} onMouseEnter={handleMouseOver}/>
                </div>
                <div className="ProductSwatch">
                    <ul className="SwatchList">
                        <li className="SwatchBlack" onMouseEnter={handleMouseOver}>
                            <a href=" ">
                                <img
                                    src="https://www.rimowa.com/on/demandware.static/-/Sites-rimowa-master-catalog-final/default/dw970d1792/images/swatch/dior_black.png"
                                     className="SwatchImage" alt=""></img>
                            </a>
                        </li>
                        <li className="SwatchSilver">
                            <a href=" ">
                                <img src="https://www.rimowa.com/on/demandware.static/-/Sites-rimowa-master-catalog-final/default/dw34e11479/images/swatch/dior_silver.png"
                                     className="SwatchImage" alt=""></img>
                            </a>
                        </li>
                        <li className="SwatchBlue">
                            <a href=" ">
                                <img src="https://www.rimowa.com/on/demandware.static/-/Sites-rimowa-master-catalog-final/default/dwc0102692/images/swatch/gradient_blue.png"
                                     className="SwatchImage" alt=""></img>
                            </a>
                        </li>
                    </ul>

                </div>
                <div className="ProductBadge">
                    <div className="IconTag"></div>
                    <div className="TagName">LIMITED EDITION</div>
                </div>
            </div>
        </li>
    );
};

export default EditionProduct;
