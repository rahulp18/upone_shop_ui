import React from "react";

const StafTable = ({ activeStafs }) => {
  return (
    <div className="overflow-x-scroll md:max-w-full max-w-xs">
      <div className="overflow-x-auto">
        {activeStafs.length === 0 ? (
          <h1>No active stafs</h1>
        ) : (
          <table className="table table-compact w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Phone</th>
                <th>Skills</th>
              </tr>
            </thead>
            <tbody>
              {activeStafs.map((item, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.number} </td>
                  <td>{item.skills.toString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default StafTable;
