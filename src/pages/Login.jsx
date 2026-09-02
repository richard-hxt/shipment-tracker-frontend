import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');

    try {
      const response = await api.post('/auth/login', { username, password });
      localStorage.setItem('token', response.data.token);
      navigate('/');
    } catch (err) {
      setError('Usuario o contraseña incorrectos');
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F7F8FA]">
      <form
        onSubmit={handleSubmit}
        className="bg-white border border-gray-200 rounded-xl p-8 w-80 flex flex-col gap-4"
      >
        <h1 className="font-display text-xl text-navy mb-2">Iniciar sesión</h1>

        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-600">Usuario</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-600">Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm"
          />
        </div>

        {error && <p className="text-orange text-sm">{error}</p>}

        <button
          type="submit"
          className="bg-navy hover:bg-navy/90 text-white text-sm font-medium px-4 py-2 rounded-md transition-colors mt-2"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;