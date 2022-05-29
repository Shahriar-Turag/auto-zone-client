import { useEffect, useState } from "react";

const useProductDetails = (productId) => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const url = `https://limitless-thicket-02169.herokuapp.com/products/${productId}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, [productId]);
    return [product];
};

export default useProductDetails;
