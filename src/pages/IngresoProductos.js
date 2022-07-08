import { Button, Card, Table } from 'antd'
import React from 'react'

const IngresoProductos = ({setVisible}) => {
  return (
    <Card
    bordered={false}
    className="criclebox tablespace mb-24"
    title="Tabla de Ingreso de Productos"
   >

      <Table dataSource={[]} />
    </Card>
  )
}

export default IngresoProductos