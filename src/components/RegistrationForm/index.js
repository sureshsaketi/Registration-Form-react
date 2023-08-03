import {Component} from 'react'
import './index.css'

const initialState = {
  firstName: '',
  lastName: '',
  showFirstNameError: false,
  showLastNameError: false,
  isFormSubmitted: false,
}
class RegistrationForm extends Component {
  state = initialState

  onBlurFirstName = event => {
    if (event.target.value === '') {
      this.setState({showFirstNameError: true})
    } else {
      this.setState({showFirstNameError: false})
    }
  }

  onBlurLastName = event => {
    if (event.target.value === '') {
      this.setState({showLastNameError: true})
    } else {
      this.setState({showLastNameError: false})
    }
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  renderFirstNameField = () => {
    const {firstName, showFirstNameError} = this.state
    const errorClass = showFirstNameError ? 'error-input' : ''
    return (
      <>
        <label className="name-label" htmlFor="firstName">
          FIRST NAME
        </label>
        <input
          type="text"
          className={`input ${errorClass}`}
          id="firstName"
          placeholder="First name"
          value={firstName}
          onChange={this.onChangeFirstName}
          onBlur={this.onBlurFirstName}
        />
      </>
    )
  }

  renderLastNameField = () => {
    const {lastName, showLastNameError} = this.state
    const errorClass = showLastNameError ? 'error-input' : ''

    return (
      <>
        <label className="name-label" htmlFor="lastName">
          LAST NAME
        </label>
        <input
          type="text"
          className={`input ${errorClass}`}
          id="lastName"
          placeholder="Last name"
          value={lastName}
          onChange={this.onChangeLastName}
          onBlur={this.onBlurLastName}
        />
      </>
    )
  }

  onSubmitFormDetails = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName === '') {
      this.setState({showFirstNameError: true})
    }
    if (lastName === '') {
      this.setState({showLastNameError: true})
    }
    if (firstName !== '' && lastName !== '') {
      this.setState({isFormSubmitted: true})
    }
  }

  getRegistrationForm = () => {
    const {showFirstNameError, showLastNameError} = this.state
    return (
      <form className="form-container" onSubmit={this.onSubmitFormDetails}>
        <div className="input-container">{this.renderFirstNameField()}</div>
        {showFirstNameError && <p className="error-message">Required</p>}
        <div className="input-container">{this.renderLastNameField()}</div>
        {showLastNameError && <p className="error-message">Required</p>}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    )
  }

  renderSubmittedSuccessfully = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png "
        alt="success"
      />
      <p className="success-text">Submitted Successfully</p>
      <button
        type="button"
        className="another-sub-btn"
        onClick={this.submitAnotherResponse}
      >
        Submit Another Response
      </button>
    </>
  )

  submitAnotherResponse = () => this.setState(initialState)

  render() {
    const {isFormSubmitted} = this.state
    return (
      <div className="app-container">
        <h1 className="registration-heading">Registration</h1>
        {isFormSubmitted
          ? this.renderSubmittedSuccessfully()
          : this.getRegistrationForm()}
      </div>
    )
  }
}
export default RegistrationForm
