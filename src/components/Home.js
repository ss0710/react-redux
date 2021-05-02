import React from 'react';

const Home = (props) => {
    console.warn("props", props);
    return(
        <div>
            <h1>Add to Cart</h1>
            <div className="add-to-cart">
                <span className="cart-items">{props.cardData.cardItems.length}</span>
                <img className="cartImage" src="https://www.doofinder.com/main-files/uploads/2018/03/abandoned-cart-carritos-abandonados.jpg" alt="cart" />
            </div>
            <div className="cart">
                <div className="img item">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDNTXM8hp22xnJ5RctvGYvOWH1TAqaykzF4A&usqp=CAU" alt="phone" />
                </div>

                <div className="details">
                <div className="text item">
                    <span>Phone</span>
                    <span>10000 Rs</span>
                    <button
                     onClick={()=>props.addToCartHandler({price:'1000',})}
                    >Add to cart
                     </button>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Home;