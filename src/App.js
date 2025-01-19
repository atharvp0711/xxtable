import React, { useState } from "react";

const App = () => {
  const [tableData, setTableData] = useState([
    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" },
  ]);

  const handleViewSort = () => {
    let viewSortData = [...tableData].sort((a, b) => a.views - b.views);
    setTableData(viewSortData);
  };

  const handleDateSort = () => {
    let dateSortData = [...tableData].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setTableData(dateSortData);
  };

  return (
    <div>
      <h1> Date and Views Table </h1>
      <div className="sortingButtons" style={{ display: "flex" }}>
        <button onClick={handleDateSort} style={{ marginRight: "20px" }}>
          {" "}
          Sort by Date{" "}
        </button>
        <button onClick={handleViewSort}> Sort by Views </button>
      </div>
      <table>
        <tr>
          <th> Date </th>
          <th> Views </th>
          <th> Article </th>
        </tr>
        {tableData.map((val, key) => {
          return (
            <tr key={key}>
              <td> {val.date} </td>
              <td> {val.views} </td>
              <td> {val.article} </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default App;
