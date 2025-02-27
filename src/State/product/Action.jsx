import { api } from "../../config/apiConfig";
import { 
    FIND_PRODUCT_BY_ID_FAILURE, 
    FIND_PRODUCT_BY_ID_REQUEST, 
    FIND_PRODUCT_BY_ID_SUCCESS, 
    FIND_PRODUCT_FAILURE, 
    FIND_PRODUCT_REQUEST, 
    FIND_PRODUCT_SUCCESS 
} from "./ActionType";

export const findProducts = (reqData) => async (dispatch) => {
    dispatch({ type: FIND_PRODUCT_REQUEST });

    const { colors, sizes, minPrice, maxPrice, minDiscount, category, stock, sort, pageNumber, pageSize } = reqData;

    try {
        const { data } = await api.get(`/api/products`, {
            params: {
                color: colors || '',
                size: sizes || '',
                minPrice: minPrice || 0,
                maxPrice: maxPrice || 100000,
                minDiscount: minDiscount || 0,
                category: category || '',
                stock: stock || '',
                sort: sort || 'price_low',
                pageNumber: pageNumber || 1,
                pageSize: pageSize || 10
            }
        });
        console.log("API Request Params:", {
            color: colors || '',
            size: sizes || '',
            minPrice: minPrice || 0,
            maxPrice: maxPrice || 100000,
            minDiscount: minDiscount || 0,
            category: category || '',
            stock: stock || '',
            sort: sort || 'price_low',
            pageNumber: pageNumber || 1,
            pageSize: pageSize || 10
        });
        
        console.log("API Response Data:", data);
        

        console.log("product data ", data);
        dispatch({ type: FIND_PRODUCT_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: FIND_PRODUCT_FAILURE, payload: error.message });
    }
};

export const findProductsById = (reqData) => async (dispatch) => {
    dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });
   // const { productId } = reqData;
    console.log("productId ",reqData)

    try {
        const { data } = await api.get(`/api/products/id/${reqData}`);
       

        dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message });
    }
};
