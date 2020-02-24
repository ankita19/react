import React, { Component } from 'react'


class EditForm extends Component {
    constructor(props){
        super();
        this.state  = {
            id:'stepTypeSelect',
            value:'text'
        };
    }

    handleChange = event =>{
        this.setState({ value : event.target.value});
        alert(event.target.value);
    }

    changeMe(sel)
    {
      sel.style.color = "#000";              
    }
    render() {
        console.log(this.props);
        const stepType = this.props.type
        let selectOption;
        if (stepType === 'numeric') {
            selectOption = <select id="stepTypeSelect"  onChange={this.handleChange.bind(this)}>
                <option  value = "" selected="selected" disabled="true">{stepType}</option>
                <option value="decimal">Decimal</option>
                <option value="integer">Integer</option>
            </select>
        } else{
            selectOption = <select id="stepTypeSelect" value={this.state.value} onChange={this.handleChange.bind(this)}>
                <option selected disabled> {stepType}</option>
                <option value="text">Text</option>
                <option value="textArea">TextArea</option>
            </select>
            }

    return(
            <div>
            {selectOption}
        </div >
        )
        }
    }



export default EditForm