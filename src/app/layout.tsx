'use client' 
import "./globals.css";
import { Provider } from 'react-redux';
import store from '../redux/store.js';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
    <html lang="en">
      <body className=''>
        {children}
      </body>
    </html>
    </Provider>
  );
}
