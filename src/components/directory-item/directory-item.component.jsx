import {
  DirectoryItemBody,
  DirectoryItemContainer,
  DirItemBackgroundImg,
} from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
  const { title, imageUrl } = category;

  return (
    <DirectoryItemContainer>
      <DirItemBackgroundImg image={imageUrl}/>
      <DirectoryItemBody>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </DirectoryItemBody>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
