function RoundButton({children, onClick, className}) {
    return <button className={`rounded-full border-2 p-2 h-20 w-20 ${className}`} onClick={onClick}>
        <div className={`w-fit m-auto`}>
            {children}
        </div>
    </button>
}

export default RoundButton