'use server'
 
import { cookies } from 'next/headers'
 
export default async function createCookie(name: string) {
  cookies().set(name, 'true')
}