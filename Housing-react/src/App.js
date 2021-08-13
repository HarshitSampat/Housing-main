import "./App.css";
// import { useState } from "react";
import Home from "./pages/Home";
import { Switch, Route} from "react-router-dom";
import About from "./pages/about";
import propertyPage from "./pages/PropertyPage";
import Career from "./pages/career";
import Error from "./pages/Error";
import Favourite from "./pages/Favourite";
import News from "./pages/News";
import Login from "./pages/LoginPage";
import about from "./pages/about";
import career from "./pages/career";
import culture from "./pages/culture";
import leadership from "./pages/leadership";
import Listproperty from "./pages/Listproperty";
import Rent from "./pages/Rent";
import PgColiving from "./pages/PgColiving";
import edge from "./pages/edge";
import payrent from "./pages/payrent";
import rentAgreement from "./pages/rentAgreement";
import rentFurniture from "./pages/rentFurniture";
import packersAndMovers from "./pages/packersAndMovers";
import propertyManagement from "./pages/propertyManagement";
import SingleProperty from "./pages/SingleProperty";
import Project from "./pages/Projects";
import dashboard from "./pages/dashboard";
import leads from "./pages/Leads";
import mylistings from "./pages/mylistings";
import Profile from "./pages/Profile";
import Reward from "./pages/Reward";
import payrentInitiate from "./pages/payrentInitiate";
import rentAgreementInitiate from "./pages/rentAgreementInitiate";
import packersAndMoversInitiate from "./pages/packersAndMoversInitiate";
// import rentalFurnitureInitiate from "./pages/rentalFurnitureInitiate";
import RegisterPage from "./pages/RegisterPage";
import RentPropertyPage from "./pages/RentPropertyPage";
import  Interior  from "./pages/Interior";  
import PropertyManagementInitiate from './pages/propertyMamnagementInititate'
import Admin from './admin/Pages/adminHome'
import AdminUser from './admin/Pages/User'
import AdminProperty from './admin/Pages/PropertyPage'
import AdminPropertyManagement from "./admin/Pages/PropertyManagement";
import AdminPackersAndMovers from './admin/Pages/PackersAndMovers'
import AdminInterior from './admin/Pages/Interior'


function App() {
  return (
    <>  
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/buy/" component={Home} />
        <Route exact path="/buy/:City" component={propertyPage} />
        <Route
          exact
          path="/paying-guests/pgs-in-ahmedabd"
          component={PgColiving}
        />

        <Route
          exact
          path="/paying-guests/:City"
          component={PgColiving}
        />
        <Route exact path="/about" component={About} />
        <Route exact path="/career" component={Career} />
        <Route exact path="/favourites-property" component={Favourite} />
        <Route exact path="/https://housing.com/news/" component={News} />
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/about" component={about}></Route>
        <Route exact path="/careers" component={career}></Route>
        <Route exact path="/culture" component={culture}></Route>
        <Route exact path="/leadership" component={leadership}></Route>
        <Route exact path="/list-property" component={Listproperty}></Route>
        <Route exact path="/rent/" component={Rent}></Route>
        <Route exact path="/rent/:City" component={RentPropertyPage}></Route>
        <Route exact path="/rent/:City/:id" component={SingleProperty}></Route>
        <Route exact path="/edge" component={edge}></Route>
        <Route exact path="/edge/pay-rent" component={payrent}></Route>
        <Route exact path="/signUp" component={RegisterPage}></Route>
        <Route
          exact
          path="/edge/pay-rent/initiate"
          component={payrentInitiate}
        ></Route>
        <Route
          exact
          path="/rent-agreement-initiate"
          component={rentAgreementInitiate}
        ></Route>
        <Route
          exact
          path="/edge/rent-agreement"
          component={rentAgreement}
        ></Route>
        <Route
          exact
          path="/edge/packers-and-movers"
          component={packersAndMovers}
        ></Route>

        <Route
          exact
          path="/edge/packers-and-movers/initiate"
          component={packersAndMoversInitiate}
        ></Route>
        <Route
          exact
          path="/edge/interior-furniture"
          component={rentFurniture}
        ></Route>
        <Route
          exact
          path="/edge/property-management/"
          component={propertyManagement}
        ></Route>
        <Route
          exact
          path="/edge/property-management/initiate"
          component={PropertyManagementInitiate}
        ></Route>
        <Route exact path="/buy/:City/:id" component={SingleProperty} />
        <Route exact path="/Project/:projectName" component={Project}></Route>
        <Route exact path="/dashboard" component={dashboard}></Route>
        <Route exact path="/leads/buy" component={leads}></Route>
        <Route exact path="/my-listings" component={mylistings}></Route>
        <Route exact path="/my-profile" component={Profile}></Route>
        <Route exact path="/my-rewards" component={Reward}></Route>
        <Route exact path="/edge/interior-furniture/initiate" component={Interior}></Route>
        <Route exact path="/housing/admin/User" component={AdminUser}></Route>
        <Route exact path="/housing/admin/Property" component={AdminProperty}></Route>
        <Route exact path="/housing/admin/PackersAndMovers" component={AdminPackersAndMovers}></Route>
        <Route exact path="/housing/admin/Interior" component={AdminInterior}></Route>
        <Route exact path="/housing/admin/PropertyManagement" component={AdminPropertyManagement}></Route>

        {/* Admin routes */}
        <Route exact path="/housing/admin" component={Admin} />
        <Route component={Error}></Route>


        
      </Switch>
    </>
  );
}

export default App;
