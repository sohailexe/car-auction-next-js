import React from "react";

const Table = () => {
  return (
    <table className="table-fixed text-center shadow-2xl w-80">
      <tbody>
        <tr className="">
          <th className="px-4 py-2 text-lg font-bold">Sunday</th>
          <td className="px-4 py-2">Closed</td>
        </tr>
        <tr className="">
          <th className="px-4 py-2 text-lg font-bold">Monday</th>
          <td className="px-4 py-2">9am - 5pm</td>
        </tr>
        <tr className="">
          <th className="px-4 py-2 text-lg font-bold">Tuesday</th>
          <td className="px-4 py-2">9am - 5pm</td>
        </tr>
        <tr className="">
          <th className="px-4 py-2 text-lg font-bold">Wednesday</th>
          <td className="px-4 py-2">9am - 5pm</td>
        </tr>
        <tr className="">
          <th className="px-4 py-2 text-lg font-bold">Thursday</th>
          <td className="px-4 py-2">9am - 5pm</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
