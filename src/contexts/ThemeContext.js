import React, { Component, createContext } from 'react';
export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = {
        isLightTheme: false,
        light: { 
            bg: '#fa8072', 
            burgersFonts: '#fa8072', 
            headers: '#262626', 
            fonts: 'white',
            signAndNums: '#262626',
            btn: '#262626' ,
            container: '#d9d9d9', 
            shadow: '10px 10px 75px  #7e7e7e93' },
        dark: { 
            bg: '#161616', 
            burgersFonts: '#333', 
            headers: '#fa8072', 
            fonts: '#161616', 
            container: '#333', 
            shadow: '0px 0px 15px  #7e7e7e93' 
        }
    }

    toggleTheme = () => {
        this.setState({ isLightTheme: !this.state.isLightTheme })
    }

    render() {
        return (
            <ThemeContext.Provider value={{ ...this.state, toggleTheme: this.toggleTheme }}>
                { this.props.children }
            </ThemeContext.Provider>
        );
    }
}

export default ThemeContextProvider;
