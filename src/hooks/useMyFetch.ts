import { createFetch } from "@vueuse/core"

 const useMyFetch = createFetch({
  baseUrl: 'https://note-2558987357-hz.kooboo.cn',
  options: {
    immediate:false,
     beforeFetch({ options }) {
//       const myToken = await getMyToken()
//       options.headers.Authorization = `Bearer ${myToken}`

      return { options }
    },
  },
  
  fetchOptions: {
    mode: 'cors',
  },
})
export default useMyFetch