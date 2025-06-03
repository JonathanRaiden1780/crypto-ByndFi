import { Button } from "react-bootstrap";
// import user1 from "../../../assets/images/users/1.jpg"
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";

import Link from "next/link";

interface Default {
  src: any
  name: string
  country: string
  mailid: string,
  class: string
}
//table
export const Images: Default[] = [

  {
    src: "../../../assets/images/users/5.jpg",
    name: "Victoria",
    country: "Spain, UN",
    mailid: "victoriacott@Uplor.com",
    class: 'mb-5'
  },
  {
    src: "../../../assets/images/users/12.jpg",
    name: "Thomas Jaim",
    country: "Spain, UN",
    mailid: "thomasjaim@Uplor.com",
    class: 'mb-5'
  },
  {
    src: "../../../assets/images/users/4.jpg",
    name: "Rebbaca wisely",
    country: "Japan, UN",
    mailid: "rebbacawisely@Uplor .com",
    class: 'mb-5'
  },
  {
    src: "../../../assets/images/users/8.jpg",
    name: "Victoria",
    country: "New york, UK",
    mailid: "victoriacott@Uplor .com",
    class: 'mb-xl-0'
  },
  {
    src: "../../../assets/images/users/2.jpg",
    name: "Thomas Jaim",
    country: "Spain, UN",
    mailid: "thomasjaim@Uplor .com",
    class: 'mb-xl-0'
  },
  {
    src: "../../../assets/images/users/6.jpg",
    name: "Rebbaca wisely",
    country: "Japan, UN",
    mailid: "rebbacawisely@Uplor .com",
    class: 'mb-xl-0'
  },

];

interface Default2 {
  src: any
  name: string
  status: string
  Date: string
  color: string
  classlist: string
}
//table
export const Chat: Default2[] = [

  {
    src: "../../../assets/images/users/3.jpg",
    name: "Maryam Naz",
    status: "online",
    Date: "01-02-2022",
    color: "success",
    classlist: 'active'
  },
  {
    src: "../../../assets/images/users/1.jpg",
    name: "Sahar Darya",
    status: "online",
    Date: "01-02-2022",
    color: "danger",
    classlist: ''
  },
  {
    src: "../../../assets/images/users/2.jpg",
    name: "Yolduz Rafi",
    status: "online",
    Date: "02-02-2022",
    color: "success",
    classlist: ''
  },
  {
    src: "../../../assets/images/users/7.jpg",
    name: "Nargis Hawa",
    status: "offline",
    Date: "02-02-2022",
    color: "danger",
    classlist: ''
  },
  {
    src: "../../../assets/images/users/7.jpg",
    name: "Khadija Mehr",
    status: "offline",
    Date: "03-02-2022",
    color: "danger",
    classlist: ''
  },
  {
    src: "../../../assets/images/users/1.jpg",
    name: "Angela Allan",
    status: "offline",
    Date: "03-02-2022",
    color: "danger",
    classlist: ''
  },
  {
    src: "../../../assets/images/users/4.jpg",
    name: "Jack Albert",
    status: "online",
    Date: "04-02-2022",
    color: "success",
    classlist: ''
  },
  {
    src: "../../../assets/images/users/6.jpg",
    name: "Merina Rima",
    status: "offline",
    Date: "05-02-2022",
    color: "danger",
    classlist: ''
  },
  {
    src: "../../../assets/images/users/8.jpg",
    name: "Peter Gorge",
    status: "online",
    Date: "06-02-2022",
    color: "success",
    classlist: ''
  },
  {
    src: "../../../assets/images/users/6.jpg",
    name: "Daniel Rubix",
    status: "offline",
    Date: "07-02-2022",
    color: "danger",
    classlist: ''
  },
  {
    src: "../../../assets/images/users/10.jpg",
    name: "Jincy Minnie",
    status: "online",
    Date: "08-02-2022",
    color: "success",
    classlist: ''
  },
  {
    src: "../../../assets/images/users/8.jpg",
    name: "Joyce Stewart",
    status: "offline",
    Date: "09-02-2022",
    color: "danger",
    classlist: ''
  },

];


export const COLUMNS: any = [
  {
    Header: "S.No",
    accessor: "sno",
  },
  {
    Header: "PROJECT NAME",
    accessor: "project",
  },
  {
    Header: "TEAM MEMBERS",
    accessor: "team",
  },
  {
    Header: "PROJECT TYPE",
    accessor: "type",
  },
  {
    Header: "START DATE",
    accessor: "startdate",
  },
  {
    Header: "END DATE",
    accessor: "enddate",
  },
  {
    Header: "STATUS",
    accessor: "status",
  },
];

export const DATATABLE: any = [
  {
    id: 1,
    sno: <input className="form-check-input" type="checkbox" value="" aria-label="..." defaultChecked />,
    project: 'Azira - Admin',
    team: <div className="avatar-list-stacked">
      <Link href="#!"><img src="../../../assets/images/users/1.jpg" alt="img" className="avatar rounded-circle" /></Link>
      <Link href="#!"><img src="../../../assets/images/users/2.jpg" alt="img" className="avatar rounded-circle" /></Link>
      <Link href="#!"><img src="../../../assets/images/users/3.jpg" alt="img" className="avatar rounded-circle" /></Link>
      <Link href="#!"><img src="../../../assets/images/users/4.jpg" alt="img" className="avatar rounded-circle" /></Link>
    </div>,
    type: 'Bootstrap Admin',
    startdate: '12/05/2020',
    enddate: '01/08/2020',
    status: <span className="badge badge-warning-light badge-md">Pending</span>
  },
  {
    id: 2,
    sno: <input className="form-check-input" type="checkbox" value="" aria-label="..." defaultChecked />,
    project: '	Admitro - Admin',
    team: <div className="avatar-list-stacked">
      <Link href="#!"><img src="../../../assets/images/users/5.jpg" alt="img" className="avatar rounded-circle" /></Link>
      <Link href="#!"><img src="../../../assets/images/users/6.jpg" alt="img" className="avatar rounded-circle" /></Link>
      <Link href="#!"><img src="../../../assets/images/users/7.jpg" alt="img" className="avatar rounded-circle" /></Link>
      <Link href="#!"><img src="../../../assets/images/users/8.jpg" alt="img" className="avatar rounded-circle" /></Link>
    </div>,
    type: 'Laravel Admin',
    startdate: '13/05/2020',
    enddate: '03/08/2020',
    status: <span className="badge badge-danger-light badge-md">Cancelled</span>
  },
  {
    id: 3,
    sno: <input className="form-check-input" type="checkbox" value="" aria-label="..." />,
    project: '	Cino - Admin',
    team: <div className="avatar-list-stacked">
      <Link href="#!"><img src="../../../assets/images/users/9.jpg" alt="img" className="avatar rounded-circle" /></Link>
      <Link href="#!"><img src="../../../assets/images/users/2.jpg" alt="img" className="avatar rounded-circle" /></Link>
      <Link href="#!"><img src="../../../assets/images/users/4.jpg" alt="img" className="avatar rounded-circle" /></Link>
      <Link href="#!"><img src="../../../assets/images/users/8.jpg" alt="img" className="avatar rounded-circle" /></Link>
    </div>,
    type: '	Django Admin',
    startdate: '15/05/2020',
    enddate: '	05/08/2020',
    status: <span className="badge badge-success-light badge-md">Completed</span>
  },
  {
    id: 4,
    sno: <input className="form-check-input" type="checkbox" value="" aria-label="..." defaultChecked />,
    project: 'Dashplex - Admin',
    team: <div className="avatar-list-stacked">
      <Link href="#!"><img src="../../../assets/images/users/5.jpg" alt="img" className="avatar rounded-circle" /></Link>
      <Link href="#!"><img src="../../../assets/images/users/1.jpg" alt="img" className="avatar rounded-circle" /></Link>
      <Link href="#!"><img src="../../../assets/images/users/3.jpg" alt="img" className="avatar rounded-circle" /></Link>
      <Link href="#!"><img src="../../../assets/images/users/10.jpg" alt="img" className="avatar rounded-circle" /></Link>
    </div>,
    type: 'Bootstrap Admin',
    startdate: '16/05/2020',
    enddate: '07/08/2020',
    status: <span className="badge badge-primary-light badge-md">Hold</span>
  }
];
export const GlobalFilter = ({ filter, setFilter }: any) => {
  return (
    <span className="d-flex ms-auto">
      <input
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
        className="form-control mb-4"
        placeholder="Search..."
      />
    </span>
  );
};


export const BasicTable = () => {
  const tableInstance = useTable(
    {
      columns: COLUMNS,
      data: DATATABLE,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    headerGroups,
    getTableBodyProps,
    prepareRow,
    state,
    setGlobalFilter,
    page,
    nextPage,
    previousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
  }: any = tableInstance;

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <>
      <div className="d-flex">
        <select
          className=" mb-4 selectpage border me-1"
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[10, 25, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      </div>
      <table {...getTableProps()} className="table table-hover mb-0 table-bordered text-nowrap">
        <thead>
          <tr>
            <th>S.NO</th>
            <th>PROJECT NAME</th>
            <th>TEAM MEMBERS</th>
            <th>PROJECT TYPE</th>
            <th>START DATE</th>
            <th>END DATE</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row: any) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={row.id} role="row">
                {row.cells.map((cell: any) => {
                  return (
                    <td role="gridcell" className="borderrigth" {...cell.getCellProps()} key={`${row.id}-${cell.column.id}`}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="d-block d-sm-flex mt-3">
        <span className="">
          Showing 1 to 4 of 4 entries
        </span>
        <div className="ms-auto">
          <nav aria-label="Page navigation" className="pagination-style-4">
            <ul className="pagination mb-0">
              <li className="page-item disabled">
                <Link className="page-link" href="#!">
                  Prev
                </Link>
              </li>
              <li className="page-item active"><Link className="page-link" href="#!">1</Link></li>
              <li className="page-item"><Link className="page-link" href="#!">2</Link></li>
              <li className="page-item">
                <Link className="page-link text-primary" href="#!">
                  next
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};


