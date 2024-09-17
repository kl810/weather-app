import * as api from './api'
import * as mockApi from './mock'

const useMock = parseInt(process.env.REACT_APP_USE_MOCK) === 1

const  openWeatherApi = useMock ? mockApi : api

export default openWeatherApi 
