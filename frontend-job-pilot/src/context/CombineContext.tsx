export interface CombineContextProps {
    children: React.ReactNode
}

const Combine = createContext();

export default function CombineContext({ children }: CombineContextProps) {
    return(
        <Combine.Provider>
            {children}
        </Combine.Provider>
    )
}