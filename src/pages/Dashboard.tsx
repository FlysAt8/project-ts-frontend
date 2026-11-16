import { useState } from 'react';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export function Dashboard() {
  const [activeTab, setActiveTab] = useState<'general' | 'security'>('general');
  
  const [profile, setProfile] = useState({
    email: 'test@test.com',
    firstName: 'Иван',
    lastName: 'Иванов',
    phone: '+7 (999) 123-45-67',
  });

  const handleProfileSave = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Данные сохранены (имитация)');
  };

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Пароль изменен (имитация)');
  };

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-center mb-8 pb-4 border-b border-slate-700">
          <h1 className="text-3xl font-bold text-white">ProjectTS</h1>
          <div className="flex items-center gap-4">
            <span className="text-slate-300 text-sm">test@test.com</span>
            <Button
                variant="secondary"
                className="w-auto py-2 px-4 text-sm"
                onClick={() => window.location.href = '/login'}
            >
              Выйти
            </Button>
          </div>
        </header>

        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveTab('general')}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'general' 
                ? 'bg-neon-blue text-bg-dark' 
                : 'text-slate-400 hover:text-white bg-slate-800'
            }`}
          >
            Общие данные
          </button>
          <button
            onClick={() => setActiveTab('security')}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'security' 
                ? 'bg-neon-blue text-bg-dark' 
                : 'text-slate-400 hover:text-white bg-slate-800'
            }`}
          >
            Безопасность
          </button>
        </div>

        <div className="bg-bg-card/80 backdrop-blur-md border border-slate-700 rounded-2xl p-6 md:p-8">
          
          {activeTab === 'general' && (
            <form onSubmit={handleProfileSave} className="flex flex-col gap-6 max-w-xl">
              <h2 className="text-xl font-semibold text-white mb-2">Личные данные</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Имя"
                  value={profile.firstName}
                  onChange={(e) => setProfile({...profile, firstName: e.target.value})}
                />
                <Input
                  label="Фамилия"
                  value={profile.lastName}
                  onChange={(e) => setProfile({...profile, lastName: e.target.value})}
                />
              </div>
              <Input
                label="Телефон"
                type="tel"
                value={profile.phone}
                onChange={(e) => setProfile({...profile, phone: e.target.value})}
              />
              <Input
                label="Email"
                type="email"
                value={profile.email}
                onChange={(e) => setProfile({...profile, email: e.target.value})}
              />
              <div className="mt-4">
                <Button type="submit" className="w-auto px-8">Сохранить изменения</Button>
              </div>
            </form>
          )}

          {activeTab === 'security' && (
            <div className="flex flex-col gap-8 max-w-xl">
              
              <form onSubmit={handlePasswordChange} className="flex flex-col gap-6">
                <h2 className="text-xl font-semibold text-white mb-2">Смена пароля</h2>
                <Input label="Текущий пароль" type="password" required />
                <Input label="Новый пароль" type="password" required />
                <Input label="Повторите новый пароль" type="password" required />
                <div className="mt-4">
                  <Button type="submit" variant="secondary" className="w-auto px-8">
                    Обновить пароль
                  </Button>
                </div>
              </form>

              <div className="border-t border-slate-700 pt-6">
                <h2 className="text-xl font-semibold text-white mb-2">Способы входа</h2>
                <p className="text-sm text-slate-400 mb-4">
                  Управляйте привязанными аккаунтами для быстрого входа.
                </p>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg border border-slate-700 gap-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">🌐</span>
                      <div>
                        <div className="text-white font-medium">Яндекс ID</div>
                        <div className="text-xs text-slate-400">Не привязано</div>
                      </div>
                    </div>
                    <Button 
                      variant="secondary" 
                      className="w-auto py-2 px-6 text-sm whitespace-nowrap flex-shrink-0"
                      onClick={() => alert('Привязка Яндекс ID будет добавлена позже')}
                    >
                      Привязать
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg border border-slate-700 gap-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">🔑</span>
                      <div>
                        <div className="text-white font-medium">Passkey</div>
                        <div className="text-xs text-slate-400">Не настроено</div>
                      </div>
                    </div>
                    <Button 
                      variant="secondary" 
                      className="w-auto py-2 px-6 text-sm whitespace-nowrap flex-shrink-0"
                      onClick={() => alert('Добавление Passkey будет добавлено позже')}
                    >
                      Настроить
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}