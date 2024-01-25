import React, { useContext } from "react"
import signin from "services/auth/signin"
import signout from "services/auth/signout"
import useSWR from "swr"
import { ApiContext, User } from "types/data"

type AuthContextType = {
    authUser?: User
    isLoading: boolean
    signin: (username: string, password: string) => Promise<void>
    signout: () => Promise<void>
    mutate: (
        data?: User | Promise<User>,
        shouldRevalidate?: boolean,
    ) => Promise<User | undefined>
}

/**
 * 인증 Context
 */
const AuthContext = React.createContext<AuthContextType>({
    authUser: undefined,
    isLoading: false,
    signin: async () => Promise.resolve(),
    signout: async () => Promise.resolve(),
    mutate: async () => Promise.resolve(undefined)
})

export const useAuthContext = (): AuthContextType => {
    return useContext<AuthContextType>(AuthContext)
}

type AuthContextProviderProps = {
    apiContext: ApiContext
    authUser?: User
}

/**
 * 인증 컨텍스트 Provider
 */
export const AuthContextProvider = ({
    apiContext,
    authUser,
    children,
  }: React.PropsWithChildren<AuthContextProviderProps>) => {
    const { data, error, mutate } = useSWR<User>(
        `${apiContext.apiRootUrl.replace(/\/$/g, '')}/users/me`,
    )
    const isLoading = !data && !error
  
    // 로그인
    const signinInternal = async (username: string, password: string) => {
        await signin(apiContext, { username, password })
        await mutate()
    }
  
    // 로그아웃
    const signoutInternal = async () => {
        await signout(apiContext)
        await mutate()
    }
  
    return (
      <AuthContext.Provider
        value={{
            authUser: data ?? authUser,
            isLoading,
            signin: signinInternal,
            signout: signoutInternal,
            mutate,
        }}
      >
        {children}
      </AuthContext.Provider>
    )
  }