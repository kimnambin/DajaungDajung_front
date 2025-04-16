import { useState } from "react";
import Pagination from "../../components/Pagination/pagination";
import SaleItemCard from "../../components/saleItemCard/saleItemCard";
import style from './UploadItems.module.css'
import data from '../../../dummySaleData.json'

export default function UploadItems() {
  const [page, setPage] = useState(1)
  const itemPerPage = 6;
  const indexOfLast = page * itemPerPage;
  const indexOfFirst = indexOfLast - itemPerPage;
  const currentitems = data.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(data.length / itemPerPage);
  return (
    <div>
      <div className={style.UploadContainer}>
        {currentitems.map((d) => (
          <SaleItemCard key={d.id} id={d.id} name={d.name} price={d.price} date={d.days_since_posted} />
        ))}
      </div>
      <div>
        <Pagination totalPages={totalPages} currentPage={page} setCurrentPage={setPage} />
      </div>
    </div>
  )
}
