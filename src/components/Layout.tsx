"use client"
import React from 'react'
import { ThemeProvider } from './theme-provider'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <ThemeProvider
        attribute="class"
        // defaultTheme="system"
        enableSystem
      // disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </div>
  )
}

export default Layout
