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


const FilterLink = connect(
  mapStateToProps,
  //   如果mapDispatchToProps是一个函数, 并且传入ownProps, 当组件获取新的props的时候，mapDispatchToProps也会被调用.
  // 传入一个object，其中这个object所对应的value必须是actionCreator，这样redux里面会自动帮我们调用bindActionCreator，所以上面又可以变成
  { setVisibilityFilter }
  // mapDispatchToProps
)(Link)

export default FilterLink
