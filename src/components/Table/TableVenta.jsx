import { Card, Row, Table } from 'antd'
import { MdRemoveShoppingCart } from 'react-icons/md'
import React from 'react'

const TableVenta = () => {



const dataProduct = [
    {id:1,product:'Producto 1',size:'XL',price:100,quantity:1,subtotal:100},
    {id:1,product:'Producto 2',size:'L',price:23.5,quantity:1,subtotal:23.5},
    {id:1,product:'Producto 3',size:'XS',price:12.5,quantity:1,subtotal:12.5},
    {id:1,product:'Producto 4',size:'M',price:15,quantity:1,subtotal:15},
]


const columns = [
    {
        title: 'Producto',
        dataIndex: 'product',
        key: 'product',
        width: '40%'
    },

    {
        title: 'Talla',
        dataIndex: 'size',
        key: 'size',
        width: '10%'
    },

    {
        title: 'precio',
        dataIndex: 'price',
        key: 'price',
        width: '10%'
    },
    {
        title: 'cantidad',
        dataIndex: 'quantity',
        key: 'quantity',
        width: '10%'
    },   {
        title: 'subtotal',
        dataIndex: 'subtotal',
        key: 'subtotal',
        width: '10%'
    },
    {
        title: '',
        width: '10%',
        render:(text,i)=><MdRemoveShoppingCart color='red' style={{cursor:'pointer'}} onClick={()=> console.log(i)}/>
    },
]

  return (
    <Row>
        <Card style={{width:'100%'}}>
            <div className='table-responsive'>
            <Table pagination={false} className="ant-border-space" dataSource={dataProduct} columns={columns}/>

            </div>
        </Card>
    </Row>
  
  )
}

export default TableVenta