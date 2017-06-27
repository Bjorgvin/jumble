import { connect } from 'react-redux'
import { getJumble } from '../../../platform/jumbles/reducer'
import { fetchJumbles } from '../../../platform/jumbles/actions'
import Detail from './Detail'
// connect method will return a connected component
const ConnectedDetail = connect(
  (state, props)=>({
    getJumble: (id) => getJumble(state,id)
  }),{ fetchJumbles }
)(Detail)

// now we export the connected component
export default ConnectedDetail;
