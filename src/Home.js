import  { useEffect } from "react";
import Header from "./assets/Components/Header";


export default function Home() {
  const CalculateProductTotalPrice = (p,s) => { 
  const productprice = p;
  const tax = 100; 
  const shippingcost = s;
  const totalprice = productprice + tax + shippingcost;
  console.log ('totalprice', totalprice); 

};
  
const clickHandle = () => {
  CalculateProductTotalPrice(300,100);
};

  useEffect(() => {
    CalculateProductTotalPrice(250,140);
  }, []);

  const user = {
    FullName: "M Anas Ahmed",
    Age: "20",
    Company: "Ilmyst.com",
  friendlist: [
  {name: "Anas"},
  {name: "M Owais"},
  {name: "Hassan"},
  {name: "Hamza"},
  ],
  };
    return (
         <main className="App">        
            <h1>Home_Page</h1>
             <button onClick={clickHandle}>calculate total again</button>
              {/* Header */}
              <Header userinfo={user} />
              {/* Hero_Section */}
              <div className={"Hero_Section"}>
                <h3>Hero_Section</h3>
              </div>
              {/* Time_Section */}
              <div className={"Time_Section"}>
              <h3>Time_Section</h3>
              </div>
              {/* Banner_Section */}
              <div className={"Banner_Section"}>
              <h3>Banner_Section</h3>
              </div>                     
            </main>   
    )
    
}
