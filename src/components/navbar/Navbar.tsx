import "./navbar.scss"
export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="letterA.svg" height={40} alt="" />
        <span>Admin Panel</span>
      </div>
      <div className="icons">
        <img src="search.svg" alt="" className="icon"/>
        <img src="app.svg" alt="" className="icon"/>
        <img src="expand.svg" alt="" className="icon"/>
        <div className="notification">
          <img src="notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
          <span>Jane</span>
        </div>
        <img src="settings.svg" alt="" />
      </div>
    </div>
  )
}
