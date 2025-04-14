import SaleItemCard from "../../components/saleItemCard/saleItemCard";
import style from './UploadItems.module.css'

export default function UploadItems() {
  return (
    <div className={style.UploadContainer}>
      <SaleItemCard />
      <SaleItemCard />
      <SaleItemCard />
      <SaleItemCard />
      <SaleItemCard />
      <SaleItemCard />
      <div>
      </div>
    </div>
  )
}
