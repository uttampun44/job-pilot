import { useCallback, useState } from "react"

export default function useToggle() {
    const [toggle, setToggle] = useState(false)
    
    const toggleFunction = useCallback(() => {
        setToggle((prev) => !prev)

    }, [])

    return [toggle, setToggle, toggleFunction] as const
}