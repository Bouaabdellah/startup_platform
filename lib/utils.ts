import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formateDate(date : string){
  return new Date(date).toLocaleDateString('fr-DZ', {
    year : "numeric",
    month : "long",
    day : "numeric"
  });
}

export function parseServerActions <T> (response : T){
  return JSON.parse(JSON.stringify(response));
}
