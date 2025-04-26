import React from "react"

type LayoutProps = {
    children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    )
}