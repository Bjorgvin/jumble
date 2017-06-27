import { connect } from 'react-redux'
import { getJumbles } from '../../../platform/jumbles/reducer'
import { fetchJumbles } from '../../../platform/jumbles/actions'
import Overview from './Overview'
// connect method will return a connected component
const ConnectedOverview = connect(
  (state, props)=>({
    jumbles: getJumbles(state)
  }),{ fetchJumbles }
)(Overview)

// now we export the connected component
export default ConnectedOverview;
