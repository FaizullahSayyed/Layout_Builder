const ConfigurationController = () => (
  <div className="configuration-controller-container">
    <h1 className="configuration-controller-heading">Layout</h1>
    <ol className="checkbox-list-container">
      <li className="list-item">
        <input type="checkbox" id="contentCheckbox" />
        <label className="label" htmlFor="contentCheckbox">
          Content
        </label>
      </li>
      <li className="list-item">
        <input type="checkbox" id="leftNavbarCheckbox" />
        <label className="label" htmlFor="leftNavbarCheckbox">
          Left Navbar
        </label>
      </li>
      <li className="list-item">
        <input type="checkbox" id="rightNavbarCheckbox" />
        <label className="label" htmlFor="rightNavbarCheckbox">
          Right Navbar
        </label>
      </li>
    </ol>
  </div>
)

export default ConfigurationController
