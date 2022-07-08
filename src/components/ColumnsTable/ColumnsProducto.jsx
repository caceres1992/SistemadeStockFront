import { Button, Tag } from "antd";
import { HiOutlinePencilAlt } from "react-icons/hi";

export const columnsproducto = [
    {
      title: "Producto",
      dataIndex: "productoName",
      key: "productoName",
      width: "32%",
    },
  
    {
      title:"Tamaño",
      key:'size',
      dataIndex:'size',
      render:(size)=> (
        <Tag color={
         size =="M" && 'geekblue' || size=="L" && 'cyan' || size =="XL" && 'magenta' || size =="S" && 'yellow' || size &&'purple'
        } >
          {size}
        </Tag>
      )
    },
  
    {
      title: "Cantidad",
      key: "quantity",
      dataIndex: "quantity"
    },
    {
      title: "Precio",
      key: "price",
      dataIndex: "price"
    },
    {
      title: "Estado",
      key: "status",
      dataIndex: "status",
      render:(status,index)=>  <Tag style={{cursor:"pointer"}} onClick={()=>console.log(status,index)}  color={status?'cyan':'error'} className="">{status?"Enable":"Disable"}</Tag>
    },
    {
      title:'acciones',
      key:"acciones",
      render:(value)=>(
        
        <Button size="small" type="dashed" onClick={()=> console.log(value)}><HiOutlinePencilAlt style={{margin:0}} size={18}/></Button>
      )
    }
  
  ];