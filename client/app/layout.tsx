"use client";  // the following components or parts of the code should be rendered on the client side only, not on the server side.
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import AppBar from "./AppBar";
interface IProps {
  children: ReactNode;
  session: any
}
export default function RootLayout({ children, session }: IProps) {
  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          <AppBar />
          <div>{children}</div>
        </SessionProvider>
      </body>
    </html>
  );
}