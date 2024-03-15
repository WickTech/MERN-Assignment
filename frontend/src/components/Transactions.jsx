import React, { useEffect, useState } from "react";
import axios from "axios";
import TransactionTable from "./page/TransactionTable";
import SearchInput from "./page/SearchInput";
import Pagination from "./page/Pagination";
import Select from "react-select";
import Statistics from "./Statistics/Statistics";
import TransactionsBarChart from "./BarChart/TransactionsBarChart";
import { months } from "../utils/utils";
import PieChart from "./PieChart/PieChart"

const itemsPerPage = 10;

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [filtered, setFiltered] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState({
    value: 3,
    label: "March",
  });
  const [selecteValue, setSelectedValue] = useState("--select--");
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(
          `https://assesment-hn6f.onrender.com/api/transactions/${selectedMonth.value}`
        );
        setTransactions(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTransactions();
  }, [selectedMonth, searchText, page,selecteValue]);
console.log(transactions)

  const handleMonthChange = (selectedOption) => {
    setSelectedMonth(selectedOption);
    setPage(1);
  };

  const handleSearchChange = (event) => {
    const text = event.target.value;
    setSearchText(text);
    if (selecteValue === "--select--" && text != "") return;
    else if (selecteValue != "--select--" && text != "") {
      const filtered = transactions.filter(
        (transaction) =>
          transaction.title.toLowerCase().includes(text.toLowerCase()) ||
          transaction.description.toLowerCase().includes(text.toLowerCase()) ||
          transaction.price.toString().includes(text)
      );
      setFiltered(filtered);
    }else{
      setFiltered(null)
    }
  };

  const handleNextClick = () => {
    setPage(page + 1);
    console.log("from next button");
  };

  const handlePreviousClick = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleFilterChange = (selectedOption) => {
    console.log(selectedOption);
    setSelectedValue(selectedOption);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const visibleTransactions = filtered
    ? filtered.slice(startIndex, startIndex + itemsPerPage)
    : transactions.slice(startIndex, startIndex + itemsPerPage);
  const totalItems = filtered ? filtered.length : transactions.length;

  return (
    <div>
      <div className="container">
        <div className="Head">
          <Select
            className="h-select"
            value={selectedMonth}
            onChange={handleMonthChange}
            options={months}
          />
          <SearchInput
            searchText={searchText}
            handleSearchChange={handleSearchChange}
            handleFilterChange={handleFilterChange}
            selectedValue={selecteValue}
          />
        </div>
        <TransactionTable
          transactions={visibleTransactions}
          searchText={searchText}
        />
        <Pagination
          page={page}
          handleNextClick={handleNextClick}
          handlePreviousClick={handlePreviousClick}
          itemsPerPage={itemsPerPage}
          totalItems={totalItems}
        />
        <Statistics selectedMonth={selectedMonth} />
        <PieChart selectedMonth={selectedMonth}/>
        <TransactionsBarChart selectedMonth={selectedMonth} />
      </div>
    </div>
  );
}

export default Transactions;
