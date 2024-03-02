'use client'
import dynamic from "next/dynamic";
export const DynamicImage = dynamic(() => import('next/image'))