import axios from '../utils/axios'


class AuthService {

  singIn(email, password){
    return new Promise((resolve, reject) => {
      axios.post('api/home/login', {email, password})
      .then(response => {
        if (response.data.user){
          resolve(response.data.user)
        } else {
          reject(response.data.user)
        }
      })
      .catch(error => {
        reject(error)
      })

    })
  }

}

const authService = new AuthService();


export default authService;