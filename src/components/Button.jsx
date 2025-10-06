export default function Button({ label, className, size, variant }) {
  
    if (variant === "Solid") {
      variant = "bg-blue-600 text-white";
    } else if (variant === "Outline") {
      variant = "border border-blue-600 text-blue-600 bg-transparent";
    } else {
      variant = "text-blue-600 bg-transparent hover:bg-blue-100";
    }
  return (
   
    <button className={`btn ${className} ${size} ${variant}`}>
      {label}
      
    </button>
  )
}
