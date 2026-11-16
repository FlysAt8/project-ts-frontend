import { useState } from 'react';
import { Card } from '../components/Card';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      window.location.href = '/dashboard';
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card title="Вход в ProjectTS">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
          />
          <Input
            label="Пароль"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
          />
          
          <div className="flex items-center justify-between text-sm mt-2">
            <label className="flex items-center gap-2 text-slate-400 cursor-pointer hover:text-white transition-colors">
              <input type="checkbox" className="accent-neon-blue" />
              Запомнить меня
            </label>
            <Link to="#" className="text-neon-pink hover:text-pink-400 transition-colors">
              Забыли пароль?
            </Link>
          </div>

          <Button type="submit" isLoading={isLoading} className="mt-4">
            Войти
          </Button>

          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-bg-card text-slate-400">или</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <button
              type="button"
              onClick={() => alert('OAuth (Яндекс) будет добавлен позже')}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg border-2 border-slate-600 text-slate-300 hover:bg-slate-700/50 transition-colors"
            >
              <span className="font-bold text-red-500">Я</span> Войти через Яндекс
            </button>
            
            <button
              type="button"
              onClick={() => alert('Passkey будет добавлен позже')}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg border-2 border-slate-600 text-slate-300 hover:bg-slate-700/50 transition-colors"
            >
              <span className="font-bold text-neon-pink">🔑</span> Войти по Passkey
            </button>
          </div>
          
          <div className="text-center mt-4 text-slate-400 text-sm">
            Нет аккаунта?{' '}
            <Link to="/register" className="text-neon-blue hover:underline">
              Зарегистрироваться
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
}