import Cover from "../../Shared/Cover/Cover";
import shopImg from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import TabCard from "../TabCard/TabCard";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Shop = () => {
  const categories = ["salads", "pizza", "soups", "desserts", "offered"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  console.log(category);
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Amici Italiano | Order Food</title>
      </Helmet>
      <Cover
        img={shopImg}
        title="Our Shop"
        description="Would you like to try a dish?"
      ></Cover>
      {
        <Tabs className="mt-5 text-center" selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>SALAD</Tab>
            <Tab>PIZZA</Tab>
            <Tab>SOUPS</Tab>
            <Tab>DESSERTS</Tab>
            <Tab>OFFERED</Tab>
          </TabList>
          <TabPanel>
            <TabCard items={salad}></TabCard>
          </TabPanel>
          <TabPanel>
            <TabCard items={pizza}></TabCard>
          </TabPanel>
          <TabPanel>
            <TabCard items={soup}></TabCard>
          </TabPanel>
          <TabPanel>
            <TabCard items={dessert}></TabCard>
          </TabPanel>
          <TabPanel>
            <TabCard items={offered}></TabCard>
          </TabPanel>
        </Tabs>
      }
    </div>
  );
};

export default Shop;
