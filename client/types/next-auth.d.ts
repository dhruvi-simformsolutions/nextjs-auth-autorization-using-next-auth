// next-auth.d.ts file is a TypeScript declaration file that provides type definitions for the NextAuth.js library

import { Users } from "./interfaces";

// you define the types for the NextAuth.js library
declare module "next-auth"{
    interface Session{
        user: Users
    }
}