import React from 'react';
import CheckoutForm from '../Components/CheckoutForm';
import Footer from '../Components/Footer'
import sauce1 from '../img/SomeThingExtra/sauce-1.png'
import sauce2 from '../img/SomeThingExtra/sauce-2.png'
import sauce3 from '../img/SomeThingExtra/sauce-3.png'
import sauce4 from '../img/SomeThingExtra/sauce-4.png'
import sauce5 from '../img/SomeThingExtra/sauce-5.png'
import sauce6 from '../img/SomeThingExtra/sauce-6.png'



function CartPage() {

    return(
        
        <div className="CartPageTitle">
            <h1 id="CartPageTitle">Cart</h1>
        <div className="paymentInfo">
        <div className="Credit card"> Credit Card</div>
        <div className="Paypal"> Paypal</div>

        </div>

            <div id="headerLine">
            </div>

            <div id="headerLine2">
            </div>

            <div id="headerLine3">
            </div>

            <div className="extraContainer">
                <h1 id="someThingExtraTitle">something Extra?</h1>
                 <div id="somethingExtra-container">
                    <div><img src={sauce1} height="50px" width="50px"/></div>
                    <div><img src={sauce2} height="50px" width="50px"/></div>
                    <div><img src={sauce3} height="50px" width="50px"/></div>
                    <div><img src={sauce4} height="50px" width="50px"/></div>
                    <div><img src={sauce5} height="50px" width="50px"/></div>
                    <div><img src={sauce6} height="50px" width="50px"/></div>
                </div>
            </div>


            <div className="checkoutForm">
                <CheckoutForm/>
            </div>

            
        
        <div className="content-wrap">
            <div className="line">  
        </div>
            <Footer/>
        </div>

        </div>



    );


}

export default CartPage

