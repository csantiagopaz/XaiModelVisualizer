import NavBar from '../components/NavBar.jsx'
import VerticalList from '../components/VerticalList.jsx'
import Header from '../components/Header.jsx'

function HomePage() {
  const names = ['Model 1', 'Model 2', 'Model 3'];
  const menu = ["Home", "About Haivis"];

  return (
   
    <div>
        <div class="container-nav">
      <NavBar list={menu}/>
        </div>
      
      <div class="container-body">
        <div class="container-center">
        <Header/>
          <div class="block-model">
        <VerticalList list={names} css_tag_ul={"model-ul"} css_tag_li={"model-link-li"}/>
        <p>
          big text just to figure out what
          
        </p>
          </div>
        </div>
      </div>
    </div>
    
  );
  
}
export default  HomePage;
