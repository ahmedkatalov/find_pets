import {useSelector} from "react-redux"

function useInitialState () {
  
  return useSelector(state => state.signIn)
  
}


export default useInitialState