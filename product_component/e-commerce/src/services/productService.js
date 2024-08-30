const fetchProductData = async ( url ) => {
    try {
        const response = await fetch(url); 
        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.statusText}`);
        }
        const data = await response.json();
        return data.product;
    } catch (error) {
        throw new Error(`Fetching product data failed: ${error.message}`);
    }
};

export default fetchProductData;