import React from 'react';

function TransactionTable({ transactions, searchText }) {
  console.log(transactions?.length)
  return (
    <div className="responsive-table">
      <table className="responsive-table">
        <thead className="table-header">
          <tr>
            <th className="col col-1">ID</th>
            <th className="col col-2">Title</th>
            <th className="col col-3">Description</th>
            <th className="col col-2">Price</th>
            <th className="col col-4">Category</th>
            <th className="col col-1">Sold</th>
            <th className="col col-4">Image</th>
          </tr>
        </thead>
        <tbody>
          {transactions!=0? transactions.map((transaction, index) => (
            <tr key={transaction._id} className="table-row">
              <td className="col col-1" data-label="Customer Name">
                {searchText !='' ? index + 1 : transaction.id}
              </td>
              <td className="col col-2" data-label="Amount">
                {transaction.title}
              </td>
              <td className="col col-3" data-label="Payment Status">
                {transaction.description}
              </td>
              <td className="col col-2" data-label="Job Id">
                {transaction.price}
              </td>
              <td className="col col-2" data-label="Customer Name">
                {transaction.category}
              </td>
              <td className="col col-1" data-label="Amount">
                {transaction.sold ? 'Yes' : 'No'}
              </td>
              <td className="col col-4" data-label="Payment Status">
                <img
                  className="table-image"
                  src={transaction.image}
                  alt={transaction.title}
                />
              </td>
            </tr>
          )):"Not item present please write something else"}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionTable;
