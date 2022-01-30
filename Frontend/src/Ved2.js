import "./style.css";
import { useState, useEffect } from "react";

export default function VedxApp2() {
  const [Data, setData] = useState([]);
  const [NameValues, setNameValues] = useState({});
  const [Search, setSearch] = useState(false);
  const [dateSorted, setDateSorted] = useState(false);
  const [filter,setFilter] = useState(false);
  const [fc,setFc] = useState({})
  const api = "https://localhost:4000/api/";
  const inputHandler = (e) => {
    e.preventDefault();
    if(e.target.myname.value)
   {
        let data = Data.find(data => data.customer==(e.target.myname.value))
    setNameValues(data);
    setSearch(true);
}else{
    setSearch(false)
}};

const DateHandler = () =>{
  let dateArray = []; 
  Data.map(item => {
    dateArray.push(item)
  })

  function sortByDate(a, b) {
    if (a.date < b.date) {
        return 1;
    }
    if (a.date > b.date) {
        return -1;
    }
    return 0;

    // a1 = a.split('/')
    // b1 = b.split('/')
    
}
dateArray.sort(sortByDate)
setFc([...dateArray])
setDateSorted(true)
// console.log(dateArray)f

}

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
    fetch("http://localhost:4000/api/dashboard", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data)
        setData(data.consumers);
      });
  }, []);

  

  return (
    <div className="App">
      <div className="nav" style={{display:"flex",justifyContent:"space-between"}}>
        <h4 style={{color:"#3262a8"}}>All Orders {Data.length}</h4>
        <p>Showing 1 - {Data.length} of {Data.length} results</p>
      </div>
      <hr />
      <div className="search"  style={{display:"flex",justifyContent:"space-between"}}>
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
        <div className="desc">
        <table id="results" class="styled-table">
            <tr>
              <th>ORDER ID</th>
              <th>CUSTOMER</th>
              <th>ADDRESS</th>
              <th>PRODUCT</th>
              <th onClick={DateHandler} className="pointer">Date Order</th>
              <th>STATUS</th>
            </tr>
            
              <tbody>
            <tr key={NameValues.order_id}>
              <td className="bold">#{NameValues.order_id} </td>
              <td>{NameValues.customer}</td>
              <td>
                <p>
                {NameValues.country}
                  <br />
                  {NameValues.address}
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
          <div className="desc">
          <table id="results" class="styled-table">
          <tr>
            <th>ORDER ID</th>
            <th>CUSTOMER</th>
            <th>ADDRESS</th>
            <th>PRODUCT</th>
            <th onClick={DateHandler} className="pointer">Date Order</th>
            <th>STATUS</th>
          </tr>
          {fc.map(item => (
            <tbody>
          <tr key={item.order_id}>
            <td className="bold">#{item.order_id} </td>
            <td>{item.customer}</td>
            <td>
              <p>
                {item.country}
                <br />
                {item.address}
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
         ):filter ? (
          <div className="desc">
          <table id="results" class="styled-table">
          
          <tr>
            <th>ORDER ID</th>
            <th>CUSTOMER</th>
            <th>ADDRESS</th>
            <th>PRODUCT</th>
            <th onClick={DateHandler} className="pointer">Date Order</th>
            <th>STATUS</th>
          </tr>
          {fc.map(item => (
            
            <tbody>
          <tr key={item.order_id}>
            <td className="bold">#{item.order_id} </td>
            <td>{item.customer}</td>
            <td>
              <p>
                {item.country}
                <br />
                {item.address}
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
         ) : (
          <div className="desc">
          <table id="results" class="styled-table">
            <tr>
              <th>ORDER ID</th>
              <th>CUSTOMER</th>
              <th>ADDRESS</th>
              <th>PRODUCT</th>
              <th onClick={DateHandler} className="pointer">Date Order</th>
              <th>STATUS</th>
            </tr>

            {Data.map((item) => (
             
                <tbody>
              <tr key={item.order_id}>
                <td className="bold">#{item.order_id}</td>
                <td>{item.customer}</td>
                <td>
                  <p>
                    {item.country}
                    <br />
                    {item.address}
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
