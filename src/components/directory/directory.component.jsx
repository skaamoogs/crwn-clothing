import { useSelector } from "react-redux";
import { selectCurrentLanguage } from "../../store/language/language.selector";
import DirectoryItem from "../directory-item/directory-item.component";
import { DirectoryContainer } from "./directory.styles";

const Directory = () => {
  const currentLanguage = useSelector(selectCurrentLanguage);

  const categories = [
    {
      id: 1,
      title: currentLanguage ? "Головные уборы" : "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      route: "shop/hats",
    },
    {
      id: 2,
      title: currentLanguage ? "Куртки" : "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      route: "shop/jackets",
    },
    {
      id: 3,
      title: currentLanguage ? "Кроссовки" : "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      route: "shop/sneakers",
    },
    {
      id: 4,
      title: currentLanguage ? "Женщины" : "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      route: "shop/womens",
    },
    {
      id: 5,
      title: currentLanguage ? "Мужчины" : "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      route: "shop/mens",
    },
  ];

  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem category={category} key={category.id} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
