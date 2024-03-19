import NavUser from '../body/navuser'; // Import the NavUser component
import homepageimage from '../assets/picture/homepage image.jpg';
import '../css/Home.css';
import onlineclass from '../assets/picture/online class.jpg';
import offlineclass from '../assets/picture/offlineclass.jpg';
import Footer from '../body/Footer';


function Home() {
  return (
    <div>
      <NavUser/>
     <img src={homepageimage}  className="homeimage"alt="Homepageimage" /> {/* Display the homeimage */}
     <div className="overlay"></div>
     <div>
        <p className='quotes'>Wellness,<br></br> Community &<br></br> Connection</p>
        
     </div>
     <div className="container">
  <div className="contain">
    <img src={onlineclass} className="onlineclass" alt="onlineclass" />
    <p>"Join Us for Online Yoga Classes<br />From the Comfort of Your Home"</p>
    <button className="join-onlineclass-button">Join Us</button>
  </div>
  <div className="contain">
    <img src={offlineclass} className="onlineclass" alt="onlineclass" />
    <p>"Find Peace and Balance <br></br> in Our Studio"</p>
    <button className="join-onlineclass-button">Join Us</button>
  </div>
</div>
      <Footer/>
    </div>
  );
}

export default Home;
  