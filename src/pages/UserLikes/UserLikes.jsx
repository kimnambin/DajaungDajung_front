import CardItems from '../../components/cardItem/cardItems'
import style from './UserLikes.module.css'

export default function UserLikes() {
  return (
    <div className={style.LikesContainer}>
      <CardItems />
      <CardItems />
      <CardItems />
      <CardItems />
      <CardItems />
      <CardItems />
      <CardItems />
      <CardItems />
    </div>
  )
}
