
import {BrowserRouter as Router ,Route, Switch} from "react-router-dom";
import Registration from '../Registration/registration';

import UpdateRegistration from '../admin/updateuser';
import Clouduploading from '../imageUploading/clouduploading';
import ImageView from '../imageUploading/imageView';
import Payment from '../payment/payment';
import AboutUs from '../aboutUs/aboutUs';
import Login from '../Registration/login';



import ViewWorkshop from "../Users/viewWorkshop";

// user imports
import UserUI from '../Users/userUI';
import CreateWorkshop from '../workshop/createWorkshop';
import CreateResearchPaper from '../Users/createResearchPaper/createResearchPaper';

// editor imports
import EditorUI from '../Editors/editorUI';
import EditorViewConference from '../Editors/editorViewConference';
import AddConference from '../Editors/createConferece';
import UpdateConference from '../Editors/updateConference';

// admin imports
import AdminUI from '../admin/adminUI';
import AdminViewConference from '../admin/viewConference';
import AdminViewUsers from '../admin/adminViewUsers';
import AdminViewResearchPaper from '../admin/adminViewResearchPaper';
import AdminViewWorkshop from '../admin/AdminviewWorkshop';

// reviewer imports
import ReviwerUI from '../reviewer/reviewerUI';
import ReviewerViewWorkshop from '../reviewer/reviewerViewWorkshop';
import App1 from '../reviewer/addFile';
import FilesList from '../reviewer/FilesList';
import ReviewerViewRP from '../reviewer/reviewerViewResearchPaper';

//landing page
import Landingpage from "../landingpage/landingpage";
import ViewWorkshop1 from "../workshop/viewWorkshop";
import React from "react";
import decode from "jwt-decode";


class AppRouter extends React.Component{

        state={
                isLogged:''
        }
        componentDidMount() {
                if(sessionStorage.token){
                        this.setState({isLogged:decode(sessionStorage.token).role})
                }

        }






        render() {
                        return(
                            <Switch>
                                    <Route path="/"  exact component={Landingpage}></Route>
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
                                    <Route path="/viewWorkshop1" component={ViewWorkshop1}></Route>
                                    <Route path="/createResearchPaper" component={CreateResearchPaper}></Route>

                                    {/*admin route*/}
                                     <Route path="/adminUI" component={this.state.isLogged ? AdminUI : Login}></Route>
                                    <Route path="/adminViewConference" component={this.state.isLogged ? AdminViewConference  : Login}></Route>
                                    <Route path="/admin-view" component={this.state.isLogged ? AdminViewUsers  : Login }></Route>
                                    <Route path="/adminViewResearchPaper" component={ this.state.isLogged ? AdminViewResearchPaper  : Login }></Route>
                                    <Route path="/adminViewWorkshop" component={ this.state.isLogged ? AdminViewWorkshop  : Login }></Route>

                                    {/*reviewer route*/}
                                    <Route path="/reviwerUI" component={this.state.isLogged ? ReviwerUI  : Login  }></Route>
                                    <Route path="/reviewerViewWorkshop" component={ this.state.isLogged ? ReviewerViewWorkshop  : Login   }></Route>
                                    <Route path="/addFile" component={ this.state.isLogged ? App1  : Login }></Route>
                                    <Route path="/viewFile" component={ this.state.isLogged ? FilesList  : Login   }></Route>
                                    <Route path="/reviewerViewRP" component={ this.state.isLogged ? ReviewerViewRP  : Login  }></Route>

                                    {/*editor route*/}
                                    <Route path="/editorUI" component={  this.state.isLogged ? FilesList  : EditorUI    }></Route>
                                    <Route path="/addConference" component={AddConference}></Route>
                                    <Route path="/editorViewConference" component={EditorViewConference}></Route>
                                    <Route path="/updateConference/:_id" component={UpdateConference}></Route>


                            </Switch>
                        )
                }
        }

export default AppRouter
