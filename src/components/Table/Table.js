import "./Table.css";

const Table = ({ id, headers, data, dataTransform, rowOnClick }) => {
  return (
    <table id={id}>
      <thead>
        <tr>
          {headers.map((header) => {
            return (
              <td className="headerCell" key={header}>
                {header}
              </td>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {data &&
          Array.isArray(data) &&
          data.map((record, i) => {
            const transformedData = dataTransform(record);
            return (
              <tr key={record.id} onClick={rowOnClick(record)} className="row">
                {transformedData.map((item, index) => (
                  <td key={`${item}-${index}`}>{item}</td>
                ))}
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default Table;
