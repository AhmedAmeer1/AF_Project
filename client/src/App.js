
import './App.css';
import {BrowserRouter as Router ,Route, Switch} from "react-router-dom";

import Registration from './components/registration';
import AdminViewUsers from './components/admin/adminViewUsers';
import Header from './components/header/header';
import Home from './components/home/home';
import UpdateRegistration from './components/admin/updateuser';
import Clouduploading from './components/imageUploading/clouduploading';
import ImageView from './components/imageUploading/imageView';
import Payment from './components/payment/payment';
import Login from './components/Registration/login';



import AdminUI from './components/admin/adminUI';
import ReviwerUI from './components/reviewerUI';


import UserUI from './components/Users/userUI';
import CreateWorkshop from './components/Users/createWorkshop';








import EditorUI from './components/Editors/editorUI';
import AddConference from './components/Editors/addConferece';
import ViewConference from './components/Editors/viewConference';
import EditConference from './components/Editors/editorUI';










function App() {
  return (
    <div className="App">
      
     
        
      <Router>
      <Header />

<div className="container">
    <Switch>
        <Route path="/"  exact component={Home}></Route>
        <Route path="/registration" component={Registration}></Route>
        <Route path="/updateUser" component={UpdateRegistration}></Route>
        <Route path="/admin-view" component={AdminViewUsers}></Route>
        <Route path="/img" component={Clouduploading}></Route>
        <Route path="/ImageView" component={ImageView}></Route>
        <Route path="/payment" component={Payment}></Route>
        <Route path="/login" component={Login}></Route>



        <Route path="/userUI" component={UserUI}></Route>
        <Route path="/addWorkshop" component={CreateWorkshop}></Route>

        


       
        <Route path="/adminUI" component={AdminUI}></Route>
        <Route path="/reviwerUI" component={ReviwerUI}></Route>
        
   
        <Route path="/editorUI" component={EditorUI}></Route>
        <Route path="/addConference" component={AddConference}></Route>
        <Route path="/editConference" component={EditConference}></Route>
        <Route path="/viewConference" component={ViewConference}></Route>
        
        


                 



    </Switch>
</div>


</Router>
      
      
    </div>
  );
}

export default App;
