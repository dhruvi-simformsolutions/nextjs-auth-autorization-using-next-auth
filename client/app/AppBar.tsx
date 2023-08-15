import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import {useRouter}  from 'next/navigation';
import React, { useState } from "react";
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';
import '../styles/global.css'

const AppBar = () => {
  const currentPathname = typeof window !== 'undefined' ? window.location.pathname : '';
  const currentPath = currentPathname === '/' ? 'home' : currentPathname.includes('admin') ? 'admin' : currentPathname.includes('user') ? 'user' : ''
  const [current, setCurrent] = useState(currentPath);
  const { data: session } = useSession();

  const items : MenuProps['items'] = [
    {
      label: (
        <Link href="/" rel="noopener noreferrer">
          Home
        </Link>
      ),
      key: 'home',
    },
    {
      label: (
        <Link href="/admin/panel" rel="noopener noreferrer">
          Admin Panel
        </Link>
      ),
      key: 'admin',
    },
    {
      label: (
        <Link href="/user" rel="noopener noreferrer">
          User Panel
        </Link>
      ),
      key: 'user',
    },
  ]

  const handleClick: MenuProps['onClick'] = (e) =>{
    setCurrent(e.key);
  }

  return(
    <div className="app-bar-container">
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" items={items} />
      {session?.user ? 
      <>
      <div><b>{session.user.username}</b></div>
      <Button type="primary" onClick={() => signOut()}>Log Out</Button>
      </>
      :
      <Button type="primary" onClick={() => signIn()}>Log In</Button>
      }
    </div>
  )
}

export default AppBar