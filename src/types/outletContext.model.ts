import { ItemDetail } from './item.model';

export interface OutletContextType {
  contextUserItemData: ItemDetail[];
  setContextUserItemData: React.Dispatch<React.SetStateAction<ItemDetail[]>>;
  contextUserLikeData: ItemDetail[];
}
