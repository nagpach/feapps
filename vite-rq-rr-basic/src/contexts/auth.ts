import React from 'react'

import type { User } from '../types/user'

const AuthContext = React.createContext<User | null>(null)
export default AuthContext
