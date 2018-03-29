import regeneratorRuntime from '../../libs/regenerator-runtime'
import { connect } from '../../libs/mina-redux'

const pageConfig = {
  changeNum() {
    this.store.dispatch({
      type: "CHANGE",
      payload: {
        num: 5
      }
    })
  },
  async onLoad(options) {
  }
}

const mapStateToPage = state => {
  return {
    num: state
  }
}
const mapDispatchToPage = dispatch => {
  return {
    add(a) {
      console.log(a)
      dispatch({
        type: "ADD"
      })
    },
    del() {
      dispatch({
        type: "DEL"
      })
    }
  }
}

Page(connect(mapStateToPage, mapDispatchToPage)(pageConfig))