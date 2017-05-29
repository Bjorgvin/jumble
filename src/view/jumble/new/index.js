import { connect } from 'react-redux'
import { reduxForm, change } from 'redux-form'
import { saveJumble } from '../../../platform/jumbles/actions'
import { savingJumble } from '../../../platform/jumbles/reducer'
import New from './New'

// Decorate the form component
const JumbleForm = reduxForm({
  form: 'jumble' // a unique name for this form
})(connect(
  state => ({
    saving: savingJumble(state),
  }),
  { change, saveJumble },
)(New));

export default JumbleForm;
