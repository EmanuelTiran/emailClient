import styles from './style.module.css'
export default function Budge({children}) {
  return (
<div style={{ display: "flex", padding: "18px",width:"800px" }}>
        <img src="./vite.svg" alt="" />
        <div style={{ background: "green", flexBasis:'500px',flexGrow:1}}>
          <h3>Jessice koel</h3>
          <p>hey Emanuel...</p>
        </div>
        <div style={{ background: "red",flexBasis:'50px' ,display: "flex",justifyContent:'end'}}>
          <p>11:34</p>
        </div>
      </div>
  )
}
