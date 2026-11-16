import { useState } from 'react';
import { Card } from '../components/Card';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export function Confirm() {
  const [code, setCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (code === '000000') {
        window.location.href = '/dashboard';
      } else {
        alert('Неверный код. Подсказка: 000000');
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card title="Подтверждение почты">
        <p className="text-center text-slate-400 mb-6 text-sm">
          Мы отправили 6-значный код на вашу почту.
          <br/>
          <span className="text-neon-pink">(Для теста введите 000000)</span>
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            label="Код из письма"
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="000000"
            maxLength={6}
            required
            className="text-center text-2xl tracking-widest"
          />

          <Button type="submit" isLoading={isLoading} className="mt-2">
            Подтвердить
          </Button>
        </form>
      </Card>
    </div>
  );
}