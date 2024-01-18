import axios from "axios"
import { useDispatch } from "react-redux"
import { resetEmailPassword } from "../../slicies/login/LoginUserSlice"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"


export const useLoginMutate = () => {
    const dispatch = useDispatch()
    const queryClient = useQueryClient()

    const loginUserMutation = useMutation({
        mutationFn: (loginInfo) => {
            // axios.post(`${import.meta.env.VITE_ENV_AND_ENVLOCAL_API_URL}/login`, loginInfo)
            return {userId: "hogehogehogeho", token: "hogehogehogehoge"}// 仮のレスポンス
        },

        onSuccess: (res) => {
            console.log(res)
            // const previosUserState = queryClient.getQueryData(["userState"])
            // queryClient.setQueryData(['userState'], [...previosUserState, res])
            queryClient.setQueryData(['userState'], res)
            dispatch(resetEmailPassword())
        }
    })

    return { loginUserMutation }

}