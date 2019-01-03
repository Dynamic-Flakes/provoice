import * as actionTypes from "../../actions/types";

const defaultState = {
  fetchingChartData: false,
  chartData: {},
  error: ""
};

export default function dashboardChartReducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHART_DATA_REQUEST:
      return {
        ...state,
        fetchingChartData: true
      }
    case actionTypes.CHART_DATA_REQUEST_SUCCESS:
      return {
        ...state,
        fetchingChartData: false,
        chartData: action.result
      }
    case actionTypes.CHART_DATA_REQUEST_FAIL: {
      let error = null
      switch (action.error.status) {
        case 409:
          error = 'Conflict.'
          break
        default:
          error = 'Při registraci došlo k neznámé chybě.'
      }
      return {
        ...state,
        fetchingChartData: false,
        chartData: null,
        error
      }
    }
    default:
      return state;
  }
}
