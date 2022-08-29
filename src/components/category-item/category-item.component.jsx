import {useNavigate} from 'react-router-dom'
import "./category-item.styles.scss";


const CategoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  const navigate = useNavigate()

  const goToCategoryHandler = () => {
    navigate(`/shop/${title}`)
  }

  return (
    <div className="category-container" onClick={goToCategoryHandler}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
