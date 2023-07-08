// Write your code here
import ConfigurationContext from '../../context'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      return (
        <div className="controller-container pi-5">
          <h1>Layout</h1>
          <div className="label-container">
            <label>
              <input
                type="checkbox"
                onChange={onToggleShowContent}
                checked={showContent}
              />
              Content
            </label>
          </div>
          <div className="label-container">
            <label>
              <input
                type="checkbox"
                onChange={onToggleShowLeftNavbar}
                checked={showLeftNavbar}
              />
              Left Navbar
            </label>
          </div>
          <div className="label-container">
            <label>
              <input
                type="checkbox"
                onChange={onToggleShowRightNavbar}
                checked={showRightNavbar}
              />
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationController
