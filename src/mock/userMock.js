import mock from '../utils/mock';

// mock.onPost('api/home/login').reply(200, {
//   'id': 1,
//   'username': 'vh12victor',
//   'email': 'vh12victor@gmail.com'
// });


mock.onPost('api/home/login').reply((config) =>{

  const {email, password } = JSON.parse(config.data)

  if (email !== 'vh12victor@gmail.com' || password !== 'admin'){
    return [400, {message: 'Seu e-mail ou senha está incorreto'}]
  }

  const user = {
    id: 1,
    name:'Victor hugo',
    username: 'vh12victor',
    email: 'vh12victor@gmail.com'
  }

  return [200, {user}]
});