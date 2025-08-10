import './Category.css';
import selectedIcon from '../../../assets/ic_selected.svg';
import unselectedIcon from '../../../assets/ic_unselected.svg';
import { useNavigate } from 'react-router-dom';
import { CategoryProps, ClickCategory } from '../../../types/item.model';

const Category = ({ selectedCategory, keyword, categories }: CategoryProps) => {
  const navigate = useNavigate();

  const handleClickCategory = (
    _id: number,
    _category: string,
    { categoryId, categoryName }: ClickCategory,
  ) => {
    if (categoryName === '전체') {
      navigate(`/items?q=${keyword}`);
    } else {
      navigate(`/items?q=${keyword}&category=${categoryId}`);
    }
  };

  const allCategories = [{ id: 0, category: '전체' }, ...categories];

  return (
    <div className="category_container">
      <div className="category_line"></div>
      <h3>카테고리</h3>
      {allCategories.map((category) => (
        <div
          className="category"
          key={category.id}
          onClick={() =>
            handleClickCategory(category.id, category.category, {
              categoryId: category.id,
              categoryName: category.category,
            })
          }
        >
          {Number(selectedCategory) === category.id ? (
            <>
              <img src={selectedIcon} alt="selected" />
              <p>{category.category}</p>
            </>
          ) : (
            <>
              <img src={unselectedIcon} alt="unselected" />
              <p>{category.category}</p>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Category;
