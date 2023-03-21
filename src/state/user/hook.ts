import { useDispatch, useSelector } from "react-redux"
import { AppState } from ".."
import { useCallback } from "react"
import { UserStateType, setUser } from './reducer';

export const useUser = () => {
    const user = useSelector((state: AppState) => state.user)
    const dispatch = useDispatch()

    const onSetUser = useCallback((user: UserStateType) => {
        dispatch(setUser(user))
    }, [dispatch])

    return {
        user,
        onSetUser
    }

}