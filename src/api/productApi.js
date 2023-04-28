import axiosClient from './axiosClient'

// const fetchQuestionApi = () => {
//   const url='/questions'
//   return axiosClient.get(url)
// }

const productApi = {
  fetchProductApi: (params) => {
    const url=`/${params}`
    return axiosClient.get(url)
  },
  fetchCategoryApi: (params) => {
    const url=`/${params}`
    return axiosClient.get(url)
  },
  fetchProductApiById: (id) => {
    const url=`/product/${id}`
    return axiosClient.get(url)
  },
  fetchAccountApi: () => {
    const url='/account'
    return axiosClient.get(url)
  },
}

export default productApi
