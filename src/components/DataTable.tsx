import { useEffect, useState } from "react"
import {
  DataGrid,
  GridColDef,
  GridValueGetterParams,
  GridToolbar
} from "@mui/x-data-grid"
import { useDemoData } from "@mui/x-data-grid-generator"

const columns: GridColDef[] = [
  { field: "id", headerName: "id", width: 70 },
  { field: "name", headerName: "name", width: 120 },
  { field: "year", headerName: "year", width: 120 }
]

const VISIBLE_FIELDS = ["id"]

export default function DataTable() {
  function BasicExampleDataGrid() {
    const { data } = useDemoData({
      dataSet: "Employee",
      visibleFields: VISIBLE_FIELDS,
      rowLength: 100
    })
  }

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("https://reqres.in/api/products?per_page=6")
      .then(response => response.json())
      .then(json => setProducts(json.data))
  }, [])

  console.log(products)

  return (
    <div style={{ height: 400, width: "100%" }}>
      <>
        <DataGrid
          rows={products}
          columns={columns}
          // pageSize={6}
          // rowsPerPageOptions={[6]}
          checkboxSelection
          components={{ Toolbar: GridToolbar }}
        />
      </>
    </div>
  )
}
