import { data, friendlyNames } from "../a.js"
/*
import DataTable from "react-data-table-component"
import { useState } from "react";
import PivotTable from 'react-pivot';
*/
import { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';

function App() {
  
  const columns = useMemo(
    () => Object.keys(friendlyNames).map((key) => ({
      accessorKey: key,
      header: friendlyNames[key],
      size: friendlyNames[key].length * 10,
    })),
    [],
  );
  const table = useMaterialReactTable({
    columns,
    data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    enableColumnFilterModes: true,
    enableColumnOrdering: true,
    enableGrouping: true,
    enableColumnPinning: true,
    enableFacetedValues: true,
    enableRowSelection: true,
  });

  return <MaterialReactTable table={table} />;

  /*const [selectedRow, setSelectedRow] = useState(null);

  const onSelectRow = (e) => {
    setSelectedRow(e.target.value);
  }
  return (
    <>
    <div className="w-screen">
    <DataTable
      columns={Object.keys(friendlyNames).map((key) => ({
        name: friendlyNames[key],
        selector: row => row[key],
        sortable: true,
      }))}
      title="Informacion"
      data={data}
      pagination
      paginationPerPage={5}
    />
    </div>
      <section>
        <select name="select" id="id" onChange={(e) => onSelectRow(e)}>
          {Object.keys(friendlyNames).map((key) => (
            <option value={key} key={key}>
              {friendlyNames[key]}
            </option>
          ))}
        </select>
      </section>

      <section>
        <p>{selectedRow}</p>
      </section>

      <PivotTable
        rows={data}
        dimensions={[
          {value: 'UNIVERSIDADDESTINO', title: 'Universidad Destino'},
          {value: 'ANIO', title: 'Año'},
          {value: 'TIPO', title: 'Tipo de Participante'},
        ]}
        reduce={(row, memo) => {
          memo.count = (memo.count || 0) + 1;
          return memo;
        }}
        calculations={[
          {title: 'Cantidad de Eventos', value: 'count'}
        ]}
      />
    </>
  )*/
}

export default App
