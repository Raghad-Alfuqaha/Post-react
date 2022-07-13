import React from 'react'

const Card = ({namesList,type}) => {
const cards = namesList.map(({name,age,adrress,phone},ind) =>(
  <div className="card" key={ind} style={{backgroundColor:type==="men" ? "blue" : "red"}}>
<div>name :{name}</div>
<div>{age}</div>
<div>{adrress}</div>
<div>{phone}</div>
</div>
));
   

return <div>{cards}</div>
};
export default Card;
