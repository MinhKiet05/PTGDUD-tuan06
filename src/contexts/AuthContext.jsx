import React from 'react'
import { useContext, createContext, useState } from 'react'
const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    
    const login = () => {
        setUser({ name: "Minh Kiệt" })
    }
    const logout = () => {
        setUser(null)
    }
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
export const useAuth = () => useContext(AuthContext)
