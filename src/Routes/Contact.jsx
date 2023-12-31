import React, { useContext } from 'react'
import Form from '../Components/Form'
import { ContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {

  const { theme } = useContext(ContextGlobal)

  return (
    <div className={`${theme === "dark" ? "dark" : null}`}>
      <h2>Te podemos ayudar con algo?</h2>
      <p>Envianos tu consulta y te responderemos durante las proximas 24 hs</p>
      <Form/>
    </div>
  )
}

export default Contact