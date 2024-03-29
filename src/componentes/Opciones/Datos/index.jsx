import React from 'react'

import styles from "./datos.module.css"

const misDatos={
  name:'Marco Antonio',
  lastname:'Huaman Lonconi',
  nacionality:'Peruano',
  dni:'73498020',
  email:'marco.hl9antonio@gmail.com',
  movile:'+51 928751897'
}
export default function Datos() {
  const presentacion='Hola estos son mis datos'
  return (
    <div className={styles.datos} id='Datos'>
      <div className={styles.card}>
        <h2>Datos</h2>
        <p>presentacion</p>
        <p>Nombre:{misDatos.name +' '+ misDatos.lastname}</p>
        <p>DNI:{misDatos.dni}</p>
        <p>Correo:{misDatos.email}</p>
        <p>Telefono: {misDatos.movile}</p>
      </div>
    </div>
  )
}
