import regeneratorRuntime from './libs/regenerator-runtime'
import { createStore, combineReducers, applyMiddleware } from './libs/redux'
import { Provider } from './libs/mina-redux'

//Reducer
import reducers from './redux/reducer/index'

export const store = createStore(
  reducers
)

App(Provider(store)({
  async onLaunch(options) {

  }
}))