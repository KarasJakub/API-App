import { useEffect, useState } from "react"
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid"

const columns: GridColDef[] = [
  { field: "id", headerName: "id", width: 70 },
  { field: "name", headerName: "name", width: 120 },
  { field: "year", headerName: "year", width: 120 }
]

export default function DataTable() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("https://reqres.in/api/products")
      .then(response => response.json())
      .then(json => setProducts(json.data))
  }, [])

  console.log(products)

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={products}
        columns={columns}
        // pageSize={5}
        // rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}
