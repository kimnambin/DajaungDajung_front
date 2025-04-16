import { useNavigate } from 'react-router-dom'
import CardItems from '../../components/cardItem/cardItems'
import style from './UserLikes.module.css'
import { useState } from 'react'
import data from '../../../dummySaleData.json'
import Pagination from '../../components/Pagination/pagination'

export default function UserLikes() {
  const [page, setPage] = useState(1);
  const itemPerPage = 8;
  const indexOfLast = page * itemPerPage;
  const indexOfFirst = indexOfLast - itemPerPage;
  const currentPage = data.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(data.length / itemPerPage);
  return (
    <div>
      <div className={style.LikesContainer}>
        {currentPage.map((d) => (
          <CardItems id={d.id} title={d.name} price={d.price.toLocaleString()} date={d.days_since_posted} />
        ))}
      </div>
      <div>
        <Pagination totalPages={totalPages} currentPage={page} setCurrentPage={setPage} />
      </div>
    </div>
  )
}
