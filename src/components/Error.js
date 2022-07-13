import {Link} from 'react-router-dom'

const Error = () => {
  return (
    <div className="not-found">
      <h1>page not found</h1>
      <br /> <br />
     <h1> <Link to ="/" >Go  Home </Link> </h1> 
    </div>
  )
}

export default Error
