import React from 'react'

export default function Nav({test1, test2}: {test1?: any, test2?: any}) {
    console.log(test1, test2);
  return (
    <nav style={{
        background: 'green',
        color: 'white',
        padding: '20px',
        textAlign: 'center',
        fontFamily: 'Arial'
    }}>Micro App</nav>
  )
}
