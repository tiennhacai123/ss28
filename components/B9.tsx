import React, { Component } from 'react'
import './B9.css'
interface Class {
    theme: string;
    language: string;
    isButtonClicked: boolean,
}


export default class B9 extends Component<any,Class> {
    constructor(props:Class) {
        super(props);
        this.state = {
          theme: 'dark', 
          language: 'vietnamese',
          isButtonClicked: false,
        };
        
      }
      toggle = () => {
        if (this.state.theme === 'light') {
            this.setState({
              theme: 'dark',
              isButtonClicked: false,
            });
          } else {
            this.setState({
              theme: 'light',
              isButtonClicked: true,
            });
          }
          if (this.state.language === 'english') {
            this.setState({
                language: 'vietnamese',
            });
          } else {
            this.setState({
                language: 'english',
            });
          }
         
      };
    
    
  render() {
    const { theme, language, isButtonClicked } = this.state;
    return (
      <div>
        <div>
            <div className={isButtonClicked ? 'clicked' : 'aa'}>

            <h1>{`Theme: ${theme}, Language: ${language}`}</h1>
            <button  onClick={this.toggle}>Toggle</button>
            </div>
        </div>
      </div>
    )
  }
}
