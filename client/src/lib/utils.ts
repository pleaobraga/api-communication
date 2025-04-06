import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import sanitizeHtml from 'sanitize-html'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const sanitizeText = (text: string) =>
  sanitizeHtml(text, {
    allowedTags: [
      'b',
      'i',
      'em',
      'strong',
      'a',
      'p',
      'div',
      'h1',
      'h2',
      'h3',
      's',
      'mark'
    ],
    allowedAttributes: { a: ['href'] }
  })
