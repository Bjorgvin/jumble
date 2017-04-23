import { connect } from 'react-redux'
import { getWelcomeText } from '../../platform/home/reducer'
import { toggle } from '../../platform/home/actions'
import Home from './Home'
// connect method will return a connected component
const ConnectedHome = connect(
  (state, props)=>({
    welcomeText: getWelcomeText(state)
  }),{ toggle }
)(Home)

// now we export the connected component
export default ConnectedHome;
