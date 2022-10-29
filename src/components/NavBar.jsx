import VerticalList from "./VerticalList.jsx";

function NavBar({list}){
    return (<div>
        
        <VerticalList list={list} css_tag_ul={"div-navbar-ul"} css_tag_li={"navbar-li"}/>
    </div>
 ); };
  
  export default NavBar;