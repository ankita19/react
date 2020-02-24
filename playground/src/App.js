import React, { Component } from 'react';
import './App.css';
import TemplateData from './components/TemplateData'
import EditForm from './components/EditForm'
import {Navbar , NavbarBrand} from 'reactstrap';


class App extends Component {
constructor(){
  super();
  this.state = {
    type :'input',
    name : 'step1',
    newType:'text'
  };
}

onClickEdit(stepType){
  this.setState({type:stepType});
}

  render() {
    var name = this.state.name;
    var type = this.state.type;
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Template Data</NavbarBrand>
        </div>
          <TemplateData editStep={this.onClickEdit.bind(this)}/>
          <EditForm name={name} type={type}/>
      </Navbar>
    </div>
  );
}
}
export default App;
