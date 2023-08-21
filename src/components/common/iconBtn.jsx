
const iconBtn = ({
    text,
    onClick,
    children,
    disabled,
    outline=false,
    customClasses,
    type, 

} )=> {

    return(
       <button
       disabled={disabled}
       onClick={onclick}
       type={type}>
        {
            children ? (
                <div>
                    <span>
                        {text}
                    </span>
                </div>
            ) : (text)
        }
       </button>
    )
    
}
export default iconBtn;