import { Button, Card, Table } from 'antd'
import React from 'react'

const Cliente = ({setVisible}) => {
  return (
    <Card
    title="Tabla de Clientes"
    extra={
      <Button type="default" onClick={()=> setVisible(true)}>Agregar Nuevo Cliente</Button>}>

    <Table dataSource={[]}/>
    </Card>
  )
}

export default Cliente