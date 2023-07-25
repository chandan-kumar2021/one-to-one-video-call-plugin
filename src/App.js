
import './App.css';
import One2One from './flows/One2One/One2One';
import React, {useEffect} from 'react';
import { getCompanyInfo } from './api';
import { getColor } from './components/configs';
import { THEME_CONFIG } from './components/configs';

function App() {

  const getCompanyData = async () => {
    try {
      let companyId = "c56946f900";

      let response = await getCompanyInfo(companyId);
      console.log("company info", response.data);
      console.log(response?.data?.data?.company_details);
      const responseData = response?.data?.data?.company_details;
      responseData.map((item) => {
        let color = localStorage.setItem("color", item?.call_plugin_configuration?.color);
        THEME_CONFIG.color = color
         localStorage.setItem(
          "fontFamily",
          item?.call_plugin_configuration?.font_family
        );
        localStorage.setItem('backgroundImage', item?.background_image);
        localStorage.setItem('brandLogo', item?.brand_logo);
        console.log("item", item?.call_plugin_configuration.color);
      });
    } catch (error) {
      console.log("company info", error);
    }
  };

  useEffect(() =>{
    getCompanyData();

  }, [])
  return (
    <div className="App">
      <One2One />

    </div>
  );
}

export default App;
