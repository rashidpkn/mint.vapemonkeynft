import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    first_name: localStorage['first_name'], 
    last_name: localStorage['last_name'], 
    email: localStorage['email'], 
    phone_number: localStorage['phone_number'] ,
    password: localStorage['password'], 
    wallet_address: localStorage['wallet_address'], 
    loginStatus:localStorage['loginStatus'] ? true : false
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state,{payload}){
        const {key,value} = payload
        state[key] = value
        localStorage.setItem(key,value)
    },
    setLogin(state,{payload}){
        localStorage.setItem('loginStatus',true)
        state.loginStatus = true
    },
    setLogout(state,{payload}){
        state.loginStatus = false
        localStorage.clear()
    }
  }
});

export const {setUser,setLogin,setLogout} = userSlice.actions

export default userSlice.reducer