import { connect } from 'react-redux'
import { getJumbles, deletingJumbles } from '../../../platform/jumbles/reducer'
import { fetchJumbles, deleteJumble } from '../../../platform/jumbles/actions'
import Overview from './Overview'
// connect method will return a connected component
const ConnectedOverview = connect(
  (state, props)=>({
    jumbles: getJumbles(state),
    deleting: deletingJumbles(state),
  }),{ fetchJumbles, deleteJumble }
)(Overview)

// now we export the connected component
export default ConnectedOverview;
