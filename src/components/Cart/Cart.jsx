

const Cart = ({selectedActors,remaining,totalCost}) => {
    return (
        <div className="text-white">
            <h2 className="bg-red-400">  Carts: {selectedActors.length} </h2>
         
            <h2>Total Cost : {totalCost}</h2>
            <h2>Total remaining : {remaining}</h2>
           
            {selectedActors.map((actor) => (
        <li className=" bg-amber-300 " key={actor.id}>{actor.name}</li>
      ))}
        </div>
    );
};

export default Cart;