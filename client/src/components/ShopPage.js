import React from 'react';

const ShopPage = () => {
    return (
        <main>
            <h1>Shop</h1>
            <p>Browse and purchase our products online.</p>
            <section>
                <h2>Our Products</h2>
                <div className="product-list">
                    <div className="product">
                        <img src="images/product1.jpg" alt="Product 1" />
                        <h3>Product 1</h3>
                        <p>$50.00</p>
                        <button>Add to Cart</button>
                        <div className="social-sharing">
                            <a href="/product1">Share on Facebook</a>
                            <a href="/product1">Share on Twitter</a>
                            <a href="/product1">Share on LinkedIn</a>
                            <a href="/product1">Share on Instagram</a>
                        </div>
                    </div>
                    <div className="product">
                        <img src="images/product2.jpg" alt="Product 2" />
                        <h3>Product 2</h3>
                        <p>$75.00</p>
                        <button>Add to Cart</button>
                        <div className="social-sharing">
                            <a href="/product2">Share on Facebook</a>
                            <a href="/product2">Share on Twitter</a>
                            <a href="/product2">Share on LinkedIn</a>
                            <a href="/product2">Share on Instagram</a>
                        </div>
                    </div>
                    <div className="product">
                        <img src="images/product3.jpg" alt="Product 3" />
                        <h3>Product 3</h3>
                        <p>$100.00</p>
                        <button>Add to Cart</button>
                        <div className="social-sharing">
                            <a href="/product3">Share on Facebook</a>
                            <a href="/product3">Share on Twitter</a>
                            <a href="/product3">Share on LinkedIn</a>
                            <a href="/product3">Share on Instagram</a>
                        </div>
                    </div>
                </div>
            </section>
            <section id="newsletter">
                <h2>Subscribe to Our Newsletter</h2>
                <form id="newsletter-form">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                    <button type="submit">Subscribe</button>
                </form>
            </section>
        </main>
    );
};

export default ShopPage;