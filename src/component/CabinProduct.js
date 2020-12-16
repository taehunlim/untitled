import React from 'react';
import "./cabinproduct.scss";

const CabinProduct = () => {
    return (
        <li className="CabinProduct">
            <a className="Thumb">
                <h5 className="ThumbTitle">YOU MAY ALSO LIKE</h5>
                <h3 className="ThumbName"> Cabin </h3>
                <div className="Cta">DISCOVER</div>
                <div className="ThumbProduct">
                    <img src="https://www.rimowa.com/on/demandware.static/-/Sites-rimowa-master-catalog-final/default/dwb295d7a3/images/large/92553004_1.png"
                         className="Cabin" alt=""/>
                </div>
            </a>
        </li>
    );
};

export default CabinProduct;
