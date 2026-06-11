import Card from "./card";
function ProductSection(){
    const products=[{

      id: 1,
      image: "Burger.webp",
      title: "Burger",
      price: "₹199"
    },

    {
      id: 2,
      image: "cupcake.jpg",
      title: "cupcake",
      price: "₹299"
    },

    {
      id: 3,
      image: "coffee.webp",
      title: "coffee",
      price: "₹99"
    },

    {
      id: 4,
      image: "Pizza.webp",
      title: "Pizza",
      price: "₹149"
    }
    ];
    return(
        <section className="product-section">
            {products.map((product)=>(
                <Card
                key={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                buttonText="Order"/>
            ))}
        </section>
    );
}
export default ProductSection;