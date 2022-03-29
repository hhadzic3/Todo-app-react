import axios from 'axios'

const urlport = `http://localhost:4001`;

export const get = (params: string,query: string) => {
  const URL = `${urlport}${params}${query}`;
      return axios.get(URL)
      .then(response => response.data)
      .catch(error => {
        console.log(error);
        throw error;
      });
 };

export const del = (params: string,query: string) => {
    const URL = `${urlport}${params}${query}`;
    
      return axios.delete(URL)
      .then(response => response.data)
      .catch(error => {
        console.log(error);
        throw error;
      });
  };

export const register = (newUser: UserAddModel) => {
  
    return axios
    .post(`${urlport}/register`, {
      email: newUser.email,
      password: newUser.password,
      confirmPassword: newUser.password
    })
    .then(response => {
      console.log('Registered')
      alert('Registered')
    })
    .catch(err => {
        console.log(err)
        alert(err)
    })
}

export const login = (user: UserAddModel) => {
  return axios
    .post(`${urlport}/login`, {
      email: user.email,
      password: user.password
    })
    .then(response => {
      
        if(response.request.statusText == "OK")
            localStorage.setItem('token', response.data.token)
        if(response.request.statusText != "OK") alert("Error data!")
      return response.request;
    })
    .catch(err => {
      console.log(err)
      alert(err)
    })
}