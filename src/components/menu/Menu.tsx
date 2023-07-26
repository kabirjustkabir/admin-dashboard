import "./menu.scss"
import {Link} from 'react-router-dom'
import {menu} from '../../data.ts'
console.log(menu)
export const Menu = () => {
  return (
    <div className="menu">
      {/* <div className="item"> */}
        {
          menu && menu.map((menu)=>{
            return(
              <div key={menu.id} className="item">
                <span className="title">{menu.title.toUpperCase()}</span>
                {
                  menu.listItems && menu.listItems.map((listItem)=>{
                    return(
                      <Link to={listItem.url} className="listItem" key={listItem.id}>
                        <img src={listItem.icon} alt="" />
                        <span className="listItemTitle">{listItem.title}</span>
                      </Link>
                    )
                  })
                }
              </div>
            )
          })
        }
        {/* <span className="title">MAIN</span>
        <Link to='/' className="listItem">
        <img src="home.svg" alt="" />
        <span className="listItemTitle">Home</span>
        </Link>
        <Link to='/' className="listItem">
        <img src="profile.svg" alt="" />
        <span className="listItemTitle">Profile</span>
        </Link>
      </div> */}
      {/* <div className="item">
        <span className="title">MAIN</span>
        <Link to='/' className="listItem">
        <img src="home.svg" alt="" />
        <span className="listItemTitle">Home</span>
        </Link>
        <Link to='/' className="listItem">
        <img src="profile.svg" alt="" />
        <span className="listItemTitle">Profile</span>
        </Link>
      </div> */}
    </div>
  )
}
