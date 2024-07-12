
function MyCompo() {
       let foodItems = ["Dal", "Khichdi", "Papad", "Salad"]
       //let foodItems = []
       // Example for conditional rendering three methods we have, ifelse, ternary operator, logical operators
       if (foodItems.length === 0){
              return <h3>I am still hungry</h3>
       }
       //This if else structure will be implemented to complete UI, but we want it to applicable to few parts only, at the same time, 
       //we cannot write if else inside jsx just like we cant write for loop in jsx, so will use ternary and logical operator
       return (
              <>
                     <h1>Healthy Food</h1>
                     {/* for loop don't work in JSX, so we will use map()*/}
                     <ul className="list-group">
                            {foodItems.map(item =><li key={item} className="list-group-item">{item}</li> )}
                     {/*Modenn React gives warning when we don't give unique key id to list items, as It has to repaint the whole list but if we give id to */}
                     </ul>
              </>
       )

}
export default MyCompo;
