import Accordion from "../Accordion";
import RandomColor from "../RandomColor/index.jsx";
import Theme from "../Theme/index.jsx";
import CustomTabs from "../CustomTabs/index.jsx";

import {useContext} from "react";

import {FeaturesContext} from "./Context/Index.jsx";

export default function Index(){

   const {features} = useContext(FeaturesContext)

   const componentsToRender = [
      {
         key: "showLightAndDarkMode",
         component: <Theme />,
      },
      {
         key: "showRandomColorGenerator",
         component: <RandomColor />,
      },


   ];

   const checkFeature = (getFeatureId) =>{
      return features[getFeatureId];
   }

   return <>
      <h1>
         Features Filter
      </h1>


      {componentsToRender.map((component) => checkFeature(component.key) ? component.component : null)}

   </>
}