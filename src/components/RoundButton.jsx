function RoundButton({children, onClick, type="button", className}) {
    return <button className={`rounded-full border-2 p-2 h-20 w-20 ${className}`} type={type} onClick={onClick}>
        <div className={`w-fit m-auto`}>
            {children}
        </div>
    </button>
}

export default RoundButton