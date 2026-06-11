import List from "./List";
function Sidebar(){
    const categories=[
        "Burger","pizza","Drinks","Desserts"];
    return(
        <aside className="sidebar">
            <h2>Categories</h2>
            <List items={categories}/>
        </aside>
    );
}
export default Sidebar;