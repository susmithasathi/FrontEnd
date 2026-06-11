import Button from "./Button";
function Card(
    {image,
     title,
     price,
     buttonText
    })
    {
        return(
            
                <div className="card">
                <img src={image} alt={title}></img>
                <h3>{title}</h3>
                <p>{price}</p>
                <Button text={buttonText}/>
                </div>
                
        );
    }
export default Card;