import EnFlag from "../../assets/flag_en.png";
const Header = () => {
  return (
    <div className="navigation-nav clearfix">
      <div className="lcol logo-new">PIZZA 4P'S</div>
      <div className="rcol clearfix">
        <ul className="gNavi hidden-xs">
          <li className="gNaviAbout">About</li>
          <li className="gNaviLocation">Location</li>
          <li className="gNaviMenu">Menu</li>
          <li className="gNaviE-invoice">E-invoice</li>
          <li className="gNaviNews">News</li>
          <li className="gNaviActivities">Activities</li>
          <li className="gNaviCareer">Career</li>
          <li className="gNaviOnlineStore">Online Store</li>
        </ul>
      </div>
      <div className="btn-home">
        <div className="btn-apply btn-res opa hidden-xs "> Reservations</div>
        <div className="btn-apply opa hidden-xs ">Delivery</div>
      </div>
    </div>
  );
};
export default Header;
