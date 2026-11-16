import { useState } from 'react';
import { Card } from '../components/Card';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

export function Register() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phone: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      window.location.href = '/confirm';
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 py-10">
      <Card title="Регистрация" className="max-w-lg">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Имя"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Иван"
            />
            <Input
              label="Фамилия"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Иванов"
            />
          </div>
          
          <Input
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
          />
          <Input
            label="Телефон"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+7 (999) 123-45-67"
          />
          <Input
            label="Пароль"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Минимум 6 символов"
            required
          />

          <Button type="submit" isLoading={isLoading} className="mt-2">
            Далее
          </Button>
          
          <div className="text-center mt-2 text-slate-400 text-sm">
            Уже есть аккаунт?{' '}
            <Link to="/login" className="text-neon-blue hover:underline">
              Войти
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
}