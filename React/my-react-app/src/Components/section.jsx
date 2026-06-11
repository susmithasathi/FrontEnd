import Card from "./card";
function section(){
 let details=[
    {
     name:"susmitha",
     id: 1,
     phone:7799275999,
     branch:"CSE"
    } , 
    {
    name:"srivalli",
     id: 2,
     phone:"684543568",
     branch:"CSE"
    }
         

 ];
 
    return(
        <section>
            <h3>My Website</h3>
            
            {details.map((detail)=>(
    <Card 
            id={detail.id}
            name= {detail.name}
            phone={detail.phone}
            branch={detail.branch}
         />
 ))}

        </section>
    );
}
export default section;