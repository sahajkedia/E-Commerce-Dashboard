import React from 'react';
import './style.css'
function AddConsumer() {
  const api = "http://localhost:4000/api/addcustomer";
  const inputHandler = (e) => {
    e.preventDefault();
    let consumer = {
      order_id : e.target.id.value,
      customer:e.target.name.value,
      country:e.target.country.value,
      address:e.target.address.value,
      product_title:e.target.title.value,
      product_description:e.target.description.value,
      date:e.target.date.value,
      status:e.target.status.value
    }
    console.log(JSON.stringify(consumer))
    const Options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
        // mode:'no-cors',
        // "Headers" : "Access-Control-Allow-Origin",'GET', 'POST', 'OPTIONS',
        body: JSON.stringify(consumer)
      
    }
    
    fetch('http://localhost:4000/api/addcustomer', Options)
    .then(response => {
      if(response.status===201){
        console.log(JSON.stringify(response))
      }
})
  }
  return (
  <div>
      <form style={{display:"flex",
    flexDirection:"column", margin:"15px", padding:"20px"}} onSubmit={inputHandler}>
        <h3>Order Something</h3>
        <label>Order ID</label><br />
        <input type="text" name="id" /><br />
        <label>Customer Name</label><br />
        <input type="text" name="name"  /><br />
        <label>Country</label><br />
        <input type="text" name="country"/><br />
        <label>Address</label><br />
        <input type="text" name="address"  /><br />
        <label>Product Title</label><br />
        <input type="text" name="title"  /><br />
        <label>Product Description</label><br />
        <input type="text" name="description" /><br />
        <label>Date</label><br />
        <input type="text" name="date"  /><br />
        <label>Status</label><br />
        <input type="text" name="status"  />
        <input type="submit" />
      </form>
  </div>
  )
}

export default AddConsumer