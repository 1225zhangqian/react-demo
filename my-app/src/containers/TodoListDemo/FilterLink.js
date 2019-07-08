import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setVisibilityFilter } from '../../actions/index'
import Link from '../../components/Link'

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setVisibilityFilter: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return bindActionCreators({
//     setVisibilityFilter: setVisibilityFilter(ownProps.filter)
//   }, dispatch)
// }

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink
