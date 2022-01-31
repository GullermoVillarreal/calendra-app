import React from 'react';
import './login.css';
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { startLogin, startRegister } from '../../actions/auth';
import Swal from 'sweetalert2';
export const LoginScreen = () => {
  const [formLoginValues, handleLoginInputChange] = useForm({
    loginEmail: 'memowars@outlook.es',
    loginPassword: '123456',
  });
  const [formRegisterValues, handleRegisterInputChange] = useForm({
    registerEmail: 'memowar2@outlook.es',
    registerName: 'memowar2@outlook.es',
    registerPassword1: '123456',
    registerPassword2: '123456',
  });
  const { loginEmail, loginPassword } = formLoginValues;
  const { registerName, registerEmail, registerPassword1, registerPassword2 } =
    formRegisterValues;
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLogin(loginEmail, loginPassword));

    console.log('Login form values: ', formLoginValues);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (registerPassword1 !== registerPassword2) {
      return Swal.fire('Error', 'Las contraseñas no coinciden', 'error');
    }
    console.log('Register form values: ', formRegisterValues);
    dispatch(startRegister(registerName, registerEmail, registerPassword1));
  };
  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-6 login-form-1">
          <h3>Ingreso</h3>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Correo"
                name="loginEmail"
                onChange={handleLoginInputChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name="loginPassword"
                onChange={handleLoginInputChange}
              />
            </div>
            <div className="form-group">
              <input type="submit" className="btnSubmit" value="Login" />
            </div>
          </form>
        </div>

        <div className="col-md-6 login-form-2">
          <h3>Registro</h3>
          <form onSubmit={handleRegister}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                name="registerName"
                onChange={handleRegisterInputChange}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Correo"
                name="registerEmail"
                onChange={handleRegisterInputChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name="registerPassword1"
                onChange={handleRegisterInputChange}
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Repita la contraseña"
                name="registerPassword2"
                onChange={handleRegisterInputChange}
              />
            </div>

            <div className="form-group">
              <input type="submit" className="btnSubmit" value="Crear cuenta" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
