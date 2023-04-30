import { background } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const CardAreas = ({titulo, descricao, imagem, link}) => {

    const navigate = useNavigate()

    const [selected, setSelected ] = useState(false)

    const readMore = (name) => {
      console.log(name)
      navigate('/areas' , {state: {title: name}})
    }

  return (
    <div  >
        <div  style={{
        width: '290px',
        height: '520px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
    }}>
            <img src={imagem} alt=""  style={{
                width: '64px',
                height: '64px',
                marginBottom: '40px'
            }}/>
            <h2  style={{
                fontSize: '24px',
                fontWeight: '700',
                marginBottom:'20px',
                minHeight: '72px'

            }}> {titulo} </h2>
            <p  style={{
                color: '#777',
                fontWeight: '300',
                padding: '10px',
                marginBottom: '90px',
                minHeight: '90px'
            }}> {descricao} </p>
            <button onClick={() => readMore(titulo)} onMouseLeave={() => setSelected(false)} onMouseOver={() => setSelected(true)} href={link} style={{
                padding: '12px 34px',
                color: selected ? 'white' : 'blue',
                border: '1px solid blue',
                fontSize: '13px',
                backgroundColor: selected ? 'blue' : 'white',
                transition: '.3s'
            }}>Saber mais</button>
    </div>
    </div>
    
  )
}

export default CardAreas