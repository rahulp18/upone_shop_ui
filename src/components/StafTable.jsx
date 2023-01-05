import React from "react";

const StafTable = () => {
  return (
    <div className="overflow-x-scroll md:max-w-full max-w-xs">
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Phone</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Teddie Duerden</td>
              <td>9777160598 </td>
              <td>Pouros, Ullrich and Windler</td>
            </tr>
            <tr>
              <th>2</th>
              <td>Teddie Duerden</td>
              <td>9777160598 </td>
              <td>Pouros, Ullrich and Windler</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Teddie Duerden</td>
              <td>9777160598 </td>
              <td>Pouros, Ullrich and Windler</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StafTable;
