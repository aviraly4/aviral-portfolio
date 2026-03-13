"use client"

export default function Navbar() {
  return (
    <nav style={{
      display:"flex",
      justifyContent:"space-between",
      padding:"20px 40px",
      background:"#111"
    }}>
      <h2>Aviral Yadav</h2>

      <div style={{display:"flex",gap:"20px"}}>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  )
}