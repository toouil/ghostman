import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

export default function cn (...inputs) {
    return twMerge(clsx(inputs))
}