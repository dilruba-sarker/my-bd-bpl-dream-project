import { useEffect, useState } from "react";
import "./Home.css";
import Cart from "../Cart/Cart";

const Home = () => {
  const [allActors, setAllactors] = useState([]);
  const [selectedActors, setSelectedActors] = useState([]);
  const [remaining, setRemaining] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const handleSelectedActors = (actor1) => {
    const isExist = selectedActors.find((item) => item.id === actor1.id);
    let cost = actor1.salary;
    if (isExist) {
      return alert("Id is booked");
    } else {
      selectedActors.forEach((item) => (cost = cost + item.salary));
      const remaining = 20000 - cost;
      if (cost > 20000) {
        return alert("taka nai");
      } else {
        setRemaining(remaining);
        selectedActors.forEach((item) => (cost = cost + item.salary));
        setTotalCost(cost);
        setSelectedActors([...selectedActors, actor1]);
        // setSelectedActors(newActors)
      }
    }

    // const newActors=[...selectedActors,actor1]
    // setSelectedActors(newActors)
    // console.log("object");
  };
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setAllactors(data));
  }, []);

  return (
    <>
      <div>
        <h2 className=" text-white text-4xl font-bold ">My BPL Team</h2>
      </div>
      <div className="container flex max-w-6xl">
        <div className="Home-container flex w-[300pc] justify-between">
          <div className="Cart-container w-[400px] grid grid-cols-2 gap-4 text-white ">
            {allActors.map((actor) => (
              <div key={actor.id} className=" w-56 h-60 border-2 p-y-8 ">
                <div className="  flex justify-center">
                  <img
                    className=" w-20 h-20 rounded-full"
                    src={actor.image}
                  ></img>{" "}
                </div>
                <h2 className=" ">{actor.name}</h2>
                <h2 className=" ">age: {actor.age}</h2>
                <p>
                  <small>
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </small>
                </p>
                <h2 className=" ">Salary: ${actor.salary}</h2>
                <button
                  onClick={() => {
                    handleSelectedActors(actor);
                  }}
                  className=" bg-pink-800 rounded-lg px-1 m-1"
                >
                  Pay Now
                </button>
              </div>
            ))}
          </div>
          <div className="carts">
            <Cart
              selectedActors={selectedActors}
              remaining={remaining}
              totalCost={totalCost}
            ></Cart>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
