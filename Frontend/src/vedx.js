import "./style.css";
import { useState, useEffect } from "react";

export default function VedxApp() {
  const [Data, setData] = useState([]);
  const [NameValues, setNameValues] = useState({});
  const [Search, setSearch] = useState(false);
  const [dateSorted, setDateSorted] = useState(false);
  const [filter,setFilter] = useState(false);
  const [fc,setFc] = useState({})
  const api = "https://my-json-server.typicode.com/Ved-X/assignment/orders";

  const inputHandler = (e) => {
    e.preventDefault();
    if(e.target.myname.value)
   {
        let data = Data.find(data => data.customer==(e.target.myname.value))
    setNameValues(data);
    setSearch(true);
}else{
    setSearch(false)
}
  };

  const DeliveredHandler = (e)=>{
    let a = []
    Data.map(item => {  
      if(item.status===e.target.value)
        a.push(item);
    })
    setFc([...a]);
    setFilter(true);
  }
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    };
    fetch(api, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  

  return (
    <div className="App">
      <div className="nav">
        <p>All Orders {Data.length}</p>
        <p>Showing 1 - {Data.length} of {Data.length} results</p>
      </div>
      <div className="search">
        <form onSubmit={inputHandler}>
          <input type="text" placeholder="press ENTER to search" name="myname" />
        </form>
        
        <div className="dropdown">
        <button  className="dropbtn">filter</button>
        <div className="dropdown-content">
        <button onClick={DeliveredHandler} value="Delivered">Delivered</button>
        <button onClick={DeliveredHandler} value="Completed">Completed</button>
        <button onClick={DeliveredHandler} value="Prepared">Prepared</button>
        <button onClick={DeliveredHandler} value="Prepone">Prepone</button>
        </div>
        </div>
      </div>
      { Search ? (
        <div>
          <table>
            <tr>
              <th>ORDER ID</th>
              <th>CUSTOMER</th>
              <th>ADDRESS</th>
              <th>PRODUCT</th>
              <th>Date Order</th>
              <th>STATUS</th>
            </tr>
            
              <tbody>
            <tr key={NameValues.order_id}>
              <td>#{NameValues.order_id} </td>
              <td>{NameValues.customer}</td>
              <td>
                <p>
                  {NameValues.address}
                  <br />
                  {NameValues.country}
                </p>
              </td>
              <td>
                <p>
                  {NameValues.product_title}
                  <br />
                  {NameValues.product_description}
                </p>
              </td>
              <td>{NameValues.date}</td>
              <td>{NameValues.status}</td>
            </tr>
            </tbody>
            
          </table>
        </div>
      ):
      
         dateSorted ? (         
              <div></div>
         ):filter ? (
          <table>
          <tr>
            <th>ORDER ID</th>
            <th>CUSTOMER</th>
            <th>ADDRESS</th>
            <th>PRODUCT</th>
            <th>Date Order</th>
            <th>STATUS</th>
          </tr>
          {fc.map(item => (
            <tbody>
          <tr key={item.order_id}>
            <td>#{item.order_id} </td>
            <td>{item.customer}</td>
            <td>
              <p>
                {item.address}
                <br />
                {item.country}
              </p>
            </td>
            <td>
              <p>
                {item.product_title}
                <br />
                {item.product_description}
              </p>
            </td>
            <td>{item.date}</td>
            <td>{item.status}</td>
          </tr>
          </tbody>
          ))}
        </table>
         ) : (
          <div className="desc">
          <table id="results">
            <tr>
              <th>ORDER ID</th>
              <th>CUSTOMER</th>
              <th>ADDRESS</th>
              <th>PRODUCT</th>
              <button className="dateorder" ><th>Date Order</th></button>
              <th>STATUS</th>
            </tr>

            {Data.map((item) => (
                <tbody>
              <tr key={item.order_id}>
                <td>#{item.order_id} </td>
                <td>{item.customer}</td>
                <td>
                  <p>
                    {item.address}
                    <br />
                    {item.country}
                  </p>
                </td>
                <td>
                  <p>
                    {item.product_title}
                    <br />
                    {item.product_description}
                  </p>
                </td>
                <td>{item.date}</td>
                <td>{item.status}</td>
              </tr>
              </tbody>
            ))}
          </table>
        </div>
         )
          }
      
    </div>
  );
}
