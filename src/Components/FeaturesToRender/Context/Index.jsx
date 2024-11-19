import {createContext, useEffect, useState} from "react";
import featureFlagsDataServiceCall from "../data.js";

export const FeaturesContext = createContext(null);

export default function FeaturesProvider  ({ children })  {

    const [features, setFeatures] = useState({})

    const fetchFeatures = async () => {
        const res = await featureFlagsDataServiceCall()

        setFeatures(res)
    }

    useEffect(() => {
        fetchFeatures()
    }, []);

    return <FeaturesContext.Provider value={{features}}>{children}</FeaturesContext.Provider>;
}