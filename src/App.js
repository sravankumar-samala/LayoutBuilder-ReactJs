import {Component} from 'react'

import ConfigurationContext from './context'
import ConfigurationController from './components/ConfigurationController'
import Layout from './components/Layout'

import './App.css'

class App extends Component {
  state = {
    showContent: true,
    showLeftNavbar: true,
    showRightNavbar: true,
  }

  toggleShowContent = () => {
    this.setState(prevState => ({showContent: !prevState.showContent}))
    // console.log('content toggled')
  }

  toggleShowLeftNavbar = () => {
    this.setState(prevState => ({showLeftNavbar: !prevState.showLeftNavbar}))
  }

  toggleShowRightNavbar = () => {
    this.setState(prevState => ({showRightNavbar: !prevState.showRightNavbar}))
  }

  render() {
    const {showLeftNavbar, showContent, showRightNavbar} = this.state

    return (
      <ConfigurationContext.Provider
        value={{
          showContent,
          showLeftNavbar,
          showRightNavbar,
          onToggleShowContent: this.toggleShowContent,
          onToggleShowLeftNavbar: this.toggleShowLeftNavbar,
          onToggleShowRightNavbar: this.toggleShowRightNavbar,
        }}
      >
        <ConfigurationController />
        <Layout />
      </ConfigurationContext.Provider>
    )
  }
}

export default App
