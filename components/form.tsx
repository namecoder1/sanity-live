'use client';

import { useState } from 'react';

export default function Form() {
  const [formData, setFormData] = useState({ title: '', description: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/sanity', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage('Documento creato con successo!');
        setFormData({ title: '', description: '' });
      } else {
        setMessage('Errore nella creazione del documento.');
        console.error(result.error);
      }
    } catch (error) {
      console.error('Errore:', error);
      setMessage('Errore nella comunicazione con il server.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='bg-gray-100 p-5 rounded-2xl'>
      <h1 className='text-lg font-semibold mb-3'>Add memo</h1>
      <form onSubmit={handleSubmit} className='flex flex-col w-full'>
        <label className='flex gap-3 items-center justify-center'>
          Titolo:
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            required
            className='w-full p-2 rounded-xl'
          />
        </label>
        <br />
        <label className='flex gap-3 items-center justify-center'>
          Descrizione:
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            required
            className='w-full p-2 rounded-xl'
          />
        </label>
        <br />
        <button type="submit" disabled={isLoading} className='bg-gray-800 px-4 py-2 rounded-xl w-fit mx-auto text-white'>
          {isLoading ? 'Caricamento...' : 'Invia'}
        </button>
      </form>
      {message && (
        <p className='absolute bottom-4 left-4 px-4 py-2 bg-gray-800/70 backdrop-blur-md rounded-xl text-white border border-gray-900'>{message}</p>
      )}
    </div>
  );
}