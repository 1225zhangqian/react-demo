import React from 'react'
const prefix = 'theme-provider'
export const themes = {
    light: 'light',
    dark: 'dark'
}
const defaultValue = {
    prefix,
    theme: themes.dark,
    toggleTheme: () => { }
};
export const ThemeContext = React.createContext(defaultValue);
export const ThemeConsumer = ThemeContext.Consumer;
class ThemeProvider extends React.Component {
    render() {
        const { theme = 'dark' } = this.props
        const config = { ...defaultValue, ...this.props, ...theme }
        return (
            <ThemeContext.Provider value={config}>
                <span className={`${prefix}-theme`} data-theme={theme}>
                    {this.props.children}
                </span>
            </ThemeContext.Provider>
        )
    }
}
export default ThemeProvider