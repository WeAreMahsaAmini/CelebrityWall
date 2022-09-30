/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import baseClsx, { ClassValue } from 'clsx'

export const clsx = (...inputs: ClassValue[]): string => baseClsx(...inputs)
