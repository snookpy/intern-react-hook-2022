import { useCallback, useState } from "react"
import enterThaiWin from "../../api/enterThaiWin"
import exitThaiWin from "../../api/exitThaiWin"
const useThaiWin = () => {

    const [isLogin, setIsLogin] = useState<boolean>(false)

    const enter = useCallback(() => {
        setIsLogin(true)
        enterThaiWin()
    }, [])

    const exit = useCallback(() => {
        setIsLogin(true)
        exitThaiWin()
    }, [])

    return [isLogin, () => {}, () => {}] as const
}

export default useThaiWin