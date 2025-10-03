export default function button({ label, className, size, variant }) {
  return (
    <button className={`btn ${className} ${size} ${variant}`}>
      {label}
    </button>
  )
}
