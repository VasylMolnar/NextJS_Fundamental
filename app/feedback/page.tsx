'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';

const FeedbackPage = () => {
  const [data, setData] = useState({ name: '', email: '', message: '' });
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Send data to API route
    const res = await fetch('http://localhost:3000/api/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    console.log(result);
    router.push(`/thank-you/`);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = e.target.name;

    setData(prevData => ({
      ...prevData,
      [name]: e.target.value,
    }));
  };

  const canSave = [...Object.values(data)].every(Boolean);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col mx-auto max-w-3xl p-6 "
      style={{ backgroundColor: 'grey', borderRadius: '25px', marginTop: '50px' }}
    >
      <h1 className="text-4xl mb-4">Contact Us</h1>

      <label className="text-2xl mb-1" htmlFor="name">
        Name:
      </label>
      <input
        className="p-3 mb-6 text-2xl rounded-2xl text-black"
        type="text"
        id="name"
        name="name"
        placeholder="Name"
        value={data.name}
        onChange={handleChange}
        autoFocus
      />

      <label className="text-2xl mb-1" htmlFor="email">
        Email:
      </label>
      <input
        className="p-3 mb-6 text-2xl rounded-2xl text-black"
        type="email"
        id="email"
        name="email"
        placeholder="test@yoursite.com"
        value={data.email}
        onChange={handleChange}
      />

      <label className="text-2xl mb-1" htmlFor="message">
        Message:
      </label>
      <textarea
        className="p-3 mb-6 text-2xl rounded-2xl text-black"
        id="message"
        name="message"
        placeholder="Your message here..."
        rows={5}
        cols={33}
        value={data.message}
        onChange={handleChange}
      />

      <button
        type="submit"
        className="p-3 mb-6 text-2xl rounded-2xl text-black border-solid border-white border-2 max-w-xs bg-slate-400 hover:cursor-pointer hover:bg-slate-300 disabled:hidden"
        disabled={!canSave}
      >
        Submit
      </button>
    </form>
  );
};

export default FeedbackPage;
