import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string){
  return new Date(date).toLocaleDateString('en-US', { // id-ID for Indonesia , en_US for English US
    month:'long',
    day: 'numeric',
    year : 'numeric',


  })
}
