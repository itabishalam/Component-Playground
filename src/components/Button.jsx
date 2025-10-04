export default function Button({ label, className, size, variant }) {
  return (
    <button className={`btn ${className} ${size} ${variant}`}>
      {label}
      
    </button>
  )
}
