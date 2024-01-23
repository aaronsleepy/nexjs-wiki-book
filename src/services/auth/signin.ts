import { ApiContext, User } from "types/data"
import { fetcher } from "uitls"

export type SigninParams = {
    username: string
    password: string
}

/**
 * API Client: signin
 * @param context API Context
 * @param params Signin Params
 */
const signin = async (
    context: ApiContext,
    params: SigninParams,
): Promise<User> => {
    return await fetcher(
        `${context.apiRootUrl.replace(/\/$/g, '')}/auth/signin`,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params)
        }
    )
}

export default signin