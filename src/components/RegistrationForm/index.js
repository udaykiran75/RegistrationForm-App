import './index.css'
import {Component} from 'react'

class RegistrationForm extends Component {
  state = {
    firstname: '',
    lastname: '',
    submited: false,
    requireFirstname: false,
    requireLastname: false,
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {firstname, lastname} = this.state
    if (firstname !== '' && lastname !== '') {
      this.setState(prevState => ({submited: !prevState.submited}))
    } else {
      if (firstname === '') {
        this.setState({requireFirstname: true})
      }
      if (lastname === '') {
        this.setState({requireLastname: true})
      }
    }
  }

  updateFirstname = event => {
    this.setState({firstname: event.target.value})
  }

  onBlurFirstname = () => {
    const {firstname} = this.state
    const isFilled = firstname === ''
    this.setState({requireFirstname: isFilled})
  }

  updateLastname = event => {
    this.setState({lastname: event.target.value})
  }

  onBlurLastname = () => {
    const {lastname} = this.state
    const isFilled = lastname === ''
    this.setState({requireLastname: isFilled})
  }

  resubmitResponse = () => {
    this.setState(prevState => ({
      submited: !prevState.submited,
      firstname: '',
      lastname: '',
    }))
  }

  render() {
    const {
      firstname,
      lastname,
      submited,
      requireFirstname,
      requireLastname,
    } = this.state
    const firstnameError = requireFirstname ? 'firstname-error' : ''
    const lastnameError = requireLastname ? 'lastname-error' : ''

    return (
      <div className="main-conatiner">
        <h1 className="heading">Registration</h1>
        {submited ? (
          <div className="form-div">
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
              className="success-img"
            />
            <p className="sucess-msg">Submitted Successfully</p>
            <button className="submit-button" onClick={this.resubmitResponse}>
              Submit Another Response
            </button>
          </div>
        ) : (
          <form className="form-div" onSubmit={this.onSubmitForm}>
            <div className="label-input-div">
              <label htmlFor="firstname" className="label-text">
                FIRST NAME
              </label>
              <input
                className={`input-box ${firstnameError}`}
                type="text"
                value={firstname}
                id="firstname"
                onChange={this.updateFirstname}
                placeholder="First name"
                onBlur={this.onBlurFirstname}
              />
              {requireFirstname && <p className="error-msg">Required</p>}
            </div>
            <div className="label-input-div">
              <label htmlFor="lastname" className="label-text">
                LAST NAME
              </label>
              <input
                className={`input-box ${lastnameError}`}
                type="text"
                value={lastname}
                id="lastname"
                onChange={this.updateLastname}
                placeholder="Last name"
                onBlur={this.onBlurLastname}
              />
              {requireLastname && <p className="error-msg">Required</p>}
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        )}
      </div>
    )
  }
}
export default RegistrationForm
