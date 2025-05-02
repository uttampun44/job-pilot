export default function Overlary() {
    return (
        <>
         {
            createPortal(
                <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-500 ease-in-out opacity-0 hover:opacity-100 z-50">
                    
                </div>,
                document.body
            )
         }
        </>
    )
}      