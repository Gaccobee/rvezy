import { useEffect, useState } from "react";

import "./App.css";

import { Button, Table, Dialog, CatCard } from "./components";
import { apiKey, apiUrl, tableHeaders, order, limit } from "./constants";
import { dataTransform, constructUrlAndOptions } from "./utils";

const App = () => {
  const [apiResponse, setApiResponse] = useState([]);
  const [page, setCurrentPage] = useState(0);
  const [showDialog, setShowDialog] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch first set of records on first render
  useEffect(() => {
    fetchAndSetNextRecords(page + 1)()
  }, []);

  const fetchAndSetNextRecords = (currentPage) => () => {
    if (currentPage === 0) return;

    setLoading(true);
    const { url, options } = constructUrlAndOptions(apiUrl, apiKey, page, order, limit)
    fetch(url, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Request error. Status: ${response.status}`);
        }
        return response.json();
      })
      .then((responseAsJson) => {
        setApiResponse(responseAsJson);
        setCurrentPage(currentPage);
        setLoading(false)
      })
      .catch((error) => {
        // TODO - Handle error case
        console.error(error);
      });

  };

  const handleToggleDialog = () =>
    setShowDialog((previousValue) => !previousValue);

  const handleRowClick = (record) => () => {
    setSelectedRecord(record);
    handleToggleDialog();
  };

  console.log('selected record: ', selectedRecord)

  return (
    <>
      <div id="container">
        <h3>Cat information</h3>
        <p>Note that the more interesting records are the records that have the "Breeds" column populated.</p>
        <p>The rows with "Breeds" populated have more informatio such as: temperament, origin, etc</p>

        <Table
          id="cat-table"
          headers={tableHeaders}
          data={apiResponse}
          dataTransform={dataTransform}
          rowOnClick={handleRowClick}
        />

        <div className="actionContainer">
          <Button
            onClick={fetchAndSetNextRecords(page - 1)}
            label="Previous page"
            disabled={page === 1 || loading}
          />
          <Button onClick={fetchAndSetNextRecords(page + 1)} disabled={loading} label="Next page" />
        </div>
        {loading && <p>Loading...</p>}
      </div>
      {showDialog && selectedRecord && (
        <Dialog handleClose={handleToggleDialog} title={"Details"}>
          <CatCard cat={selectedRecord} />
        </Dialog>
      )}
    </>
  );
};

export default App;
