import React, { Component } from 'react'
import { Field, SubmissionError } from 'redux-form'
import Jumble from '../Jumble'
               // 7MdgwfJltjRZHW63qFIzrsh1Vk9bpXcPTAOnGui4YvQBEmDUx2aKSo8ye0CNL5
const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

class New extends Component {

  constructor(props) {
    super(props)
    // bind the method to *this* so it can be used
    // as event handler in our components
    this.onGenerate = this.onGenerate.bind(this)
  }

  componentWillMount() {
    // initiate the compnent by generating a jumble
    this.onGenerate()
    // internal state indicating we are in the state
    // of creating a new jumble
    this.setState({ new: true })
  }

  makeJumble(length, characters) {
    const chars=[]
    for( var i=0; i < length; i++ ) {
      const rand = Math.floor(Math.random() * characters.length)
      chars.push(characters.charAt(rand))
    }
    return chars.join('');
  }

  onGenerate() {
    const { change } = this.props
    const jumble = this.makeJumble(100,possible)
    change('jumble','jumble', jumble)
  }

  onSubmit(values, saveJumble) {
    if(!values.jumbleName) {
      throw new SubmissionError({jumbleName: 'name empty',_error: 'name not filled in!'})
    }
    // When we are submiting a new jumble it is no
    // longer a new one
    this.setState({ new: false })
    saveJumble(values.jumbleName, values.jumble)
  }

  render() {
    const {
      handleSubmit,
      saveJumble,
      saving,
      newId,
      history,
    } = this.props

    if(!this.state.new && newId) {
      // if we are not in the state of creating a new
      // jumble, started submiting, and we have a new
      // Id we should navigate to the new id :)
      setTimeout(()=>{
        // navigate to the new Jumble
        history.push(`/jumbles/${newId}`)
      },100)
      // prevent blinking while stalling for 100 ms
      return <div>saving...</div>
    }

    if(saving) {
      // we are in the process of saving a new jumble
      return <div>saving...</div>
    }

    const jumbleField =  ({input, label})   => {
      return (
        <div>
          <label>{label}</label>
          <div>
            <Jumble jumble={input.value}/>
          </div>
          <br/>
          <input type='button' onClick={this.onGenerate} value='Regenerate' />
        </div>
      )
    }

    const renderField = ({input, label, type, meta: {touched, error, warning}}) => (
      <div>
        <label>{label}</label>
        <div>
          <input {...input} placeholder={label} type={type} />
          {touched &&
            ((error && <span>{error}</span>) ||
              (warning && <span>{warning}</span>))}
        </div>
      </div>
    )

    return (
      <form onSubmit={handleSubmit((values) => this.onSubmit(values, saveJumble))}>
        <Field
          name='jumbleName'
          type='text'
          label='Name'
          component={renderField}
        />
        <Field
          name='jumble'
          type='text'
          label='Jumble'
          component={jumbleField}
        />
        <button type="submit">Save</button>
      </form>)
  }
}

export default New
