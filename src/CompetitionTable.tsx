import React from 'react';
import {useTable} from 'react-table';
import {DnTable} from '@vzmi/denali-react-beta';

const CompetitionTable = ({columns, data}) => {
  // Use the state and functions returned from useTable to build your UI
  const {getTableProps, headerGroups, rows, prepareRow} = useTable({
    columns,
    data,
  });

  // Render the UI for your table
  return (
    <DnTable {...getTableProps()}>
      <DnTable.Head>
        {headerGroups.map((headerGroup) => (
          <DnTable.Row {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <DnTable.Cell header {...column.getHeaderProps()}>
                {column.render('Header')}
              </DnTable.Cell>
            ))}
          </DnTable.Row>
        ))}
      </DnTable.Head>
      <DnTable.Body>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <DnTable.Row {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <DnTable.Cell {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </DnTable.Cell>
                );
              })}
            </DnTable.Row>
          );
        })}
      </DnTable.Body>
    </DnTable>
  );
};

export {CompetitionTable};
