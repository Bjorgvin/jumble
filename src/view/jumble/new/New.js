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

  componentWillMount(){
    // initiate the compnent by generating a jumble
    this.onGenerate()
  }

  makeJumble(length, characters)
  {
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
    saveJumble(values.jumbleName, values.jumble)
  }

  render() {
    const {
      handleSubmit,
      saveJumble,
      saving,
    } = this.props
    if(saving) return <div>saving...</div>
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
