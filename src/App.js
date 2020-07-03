import React, { Component } from 'react';
import './index.css';
import './App.css'; 
import Home from './components/Home';
import MathProgram from './components/Math/MathProgram';
import MemoryProgram from './components/Memory/MemoryProgram';
import ThemeContextProvider from './contexts/ThemeContext';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
            <ThemeContextProvider>
                <Route render={( { location } ) => (
                    <TransitionGroup>
                        <CSSTransition
                            appear={ true }
                            key={ location.key } 
                            timeout={ 150 }
                            classNames="fade"
                        >
                        <Switch location={ location }>
                            <Route exact path='/' component={ Home }/>
                            <Route path='/memory' component={ MemoryProgram }/> 
                            <Route path='/math' component={ MathProgram }/>
                        </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                )}/>
            </ThemeContextProvider>  
            </BrowserRouter>      
        )
    }
}

export default App;
