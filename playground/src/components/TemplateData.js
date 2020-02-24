import React, { Component } from 'react';
import { Media } from 'reactstrap';

class TemplateData extends Component {
    constructor(props) {
        super();
        this.state = {
            steps: [
                {
                  name: 'step1',
                  type:'input',
                  description:'Input step type sample',
                  edit:'assets/images/edit.png'
                
                },
                
               {
                name: 'step2',
                type:'comment',
                description:'Comment step type sample',
                edit:'assets/images/edit.png'                    
               },
               {
                name: 'step3',
                type:'numeric',
                description:'Numeric step type sample',
                edit:'assets/images/edit.png'                     
               }
               ],
        };
    }




    render() {
        const stepList = this.state.steps.map((step) => {
            return (
            
              <div key={step.name} className="col-12 mt-5">
                    <p>{step.name}</p>
                    <p>{step.description}</p>
                    <p>{step.type}</p>
                    <button><img src={step.edit} alt="Edit step" onClick={() => this.props.editStep(step.type)} /></button>
                    
              </div>
            );
        });

        return (
          <div className="container">
            <div className="row">
              <Media list>
                  {stepList}
              </Media>
            </div>
          </div>
        );
    }
}

export default TemplateData;