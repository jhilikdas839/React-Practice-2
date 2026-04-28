import { Link } from "react-router-dom"

// import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="w-full flex justify-center gap-4 font-bold py-2 ">
      {/* <Link></Link> */}
      <Link to='/' className="active:scale-95">Home</Link>
      <Link to='/product' className="active:scale-95">Product</Link>
      <Link to='/contact' className="active:scale-95">Contact</Link>
    </div>
  )
}

export default Nav
