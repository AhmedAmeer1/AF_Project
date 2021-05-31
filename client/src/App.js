
import './App.css';
import {BrowserRouter as Router ,Route, Switch} from "react-router-dom";

import Registration from './components/Registration/registration';


import Home from './components/home/home';
import UpdateRegistration from './components/admin/updateuser';
import Clouduploading from './components/imageUploading/clouduploading';
import ImageView from './components/imageUploading/imageView';
import Payment from './components/payment/payment';
import AboutUs from './components/aboutUs/aboutUs';
import Login from './components/Registration/login';







import ViewWorkshop from "./components/Users/viewWorkshop";


// user imports
import UserUI from './components/Users/userUI';
import CreateWorkshop from './components/Users/createWorkshop/createWorkshop';
import CreateResearchPaper from './components/Users/createResearchPaper/createResearchPaper';




// editor imports
import EditorUI from './components/Editors/editorUI';
import EditorViewConference from './components/Editors/editorViewConference';
import AddConference from './components/Editors/createConference/createConferece';
import EditConference from './components/Editors/editorUI';

// admin imports
import AdminUI from './components/admin/adminUI';
import AdminViewConference from './components/admin/viewConference';
import AdminViewUsers from './components/admin/adminViewUsers';
import AdminViewResearchPaper from './components/admin/adminViewResearchPaper';
import AdminViewWorkshop from './components/admin/AdminviewWorkshop';




// reviewer imports
import ReviwerUI from './components/reviewer/reviewerUI';
import ReviewerViewWorkshop from './components/reviewer/reviewerViewWorkshop';









function App() {
  return (
    <div className="App">
      
     
        
      <Router>
    

<div className="container">
    <Switch>
        <Route path="/"  exact component={Home}></Route>
        <Route path="/registration" component={Registration}></Route>
        <Route path="/updateUser/:_id" component={UpdateRegistration}></Route>
        <Route path="/img" component={Clouduploading}></Route>
        <Route path="/ImageView" component={ImageView}></Route>
        <Route path="/payment" component={Payment}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/aboutUs" component={AboutUs}></Route>


        {/*user route*/}
        <Route path="/userUI" component={UserUI}></Route>
        <Route path="/addWorkshop/:email" component={CreateWorkshop}></Route>
        <Route path="/addWorkshop" component={CreateWorkshop}></Route>
        <Route path="/viewWorkshop" component={ViewWorkshop}></Route>
        <Route path="/createResearchPaper" component={CreateResearchPaper}></Route>





       {/*admin route*/}
        <Route path="/adminUI" component={AdminUI}></Route>
        <Route path="/adminViewConference" component={AdminViewConference}></Route>
        <Route path="/admin-view" component={AdminViewUsers}></Route>

        <Route path="/adminViewResearchPaper" component={AdminViewResearchPaper}></Route>
        <Route path="/adminViewWorkshop" component={AdminViewWorkshop}></Route>


        {/*reviewer route*/}
        <Route path="/reviwerUI" component={ReviwerUI}></Route>
        <Route path="/reviewerViewWorkshop" component={ReviewerViewWorkshop}></Route>



        {/*editor route*/}
        <Route path="/editorUI" component={EditorUI}></Route>
        <Route path="/addConference" component={AddConference}></Route>
        <Route path="/editConference" component={EditConference}></Route>
        <Route path="/editorViewConference" component={EditorViewConference}></Route>




        
        
        


                 



    </Switch>
</div>


</Router>
      
      
    </div>
  );
}

export default App;
