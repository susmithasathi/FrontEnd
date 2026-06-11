import Button from "./Button";
function Hero(){
    return(
        <section className="hero">
            <div className="hero-content">
                <h2>
                    Delicious Food Delivered Fast
                </h2>
                <p>Order your favorite meals from the best restaurants near you.</p>
                <Button text="Order Now"/>
                </div>
                <div className="hero-image">
                    <img src="food.jpg" alt="Food"/>
                </div>
           
        </section>
    );
}
export default Hero;