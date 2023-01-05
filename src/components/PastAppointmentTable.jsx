import React from "react";

const PastAppointmentTable = ({ componentRef }) => {
  return (
    <div className="overflow-x-scroll md:max-w-full max-w-xs">
      <div className="overflow-x-auto">
        <table className="table table-compact w-full" ref={componentRef}>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Phone</th>
              <th>Service</th>
              <th>Staf</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Teddie Duerden</td>
              <td>9777160598 </td>
              <td>Hair Cut</td>
              <td>Chandan Hema</td>
              <td>120</td>
              <td>20/03/2023</td>
            </tr>
            <tr>
              <th>2</th>
              <td>Teddie Duerden</td>
              <td>9777160598 </td>
              <td>Hair Cut</td>
              <td>Chandan Hema</td>
              <td>120</td>
              <td>20/03/2023</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Teddie Duerden</td>
              <td>9777160598 </td>
              <td>Hair Cut</td>
              <td>Chandan Hema</td>
              <td>120</td>
              <td>20/03/2023</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PastAppointmentTable;
