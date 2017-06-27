import { connect } from 'react-redux'
import { reduxForm, change } from 'redux-form'
import { withRouter } from 'react-router'
import { saveJumble } from '../../../platform/jumbles/actions'
import { savingJumble, getNewJumbleId } from '../../../platform/jumbles/reducer'
import New from './New'

// Decorate the form component
const JumbleForm = reduxForm({
  form: 'jumble' // a unique name for this form
})(connect(
  state => ({
    saving: savingJumble(state),
    newId: getNewJumbleId(state),
  }),
  { change, saveJumble },
)(withRouter(New)));

export default JumbleForm;
