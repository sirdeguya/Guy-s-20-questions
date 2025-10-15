export default function Input({id, className, value="", type="text", placeholder, onChange}) {
     return (
         <div className={"w-full border-2 rounded-2xl px-4 py-2  my-6 " + className}>
            <input className={`w-full`} id={id} type={type} placeholder={placeholder} value={value} onChange={onChange}/>
        </div>
     )
}