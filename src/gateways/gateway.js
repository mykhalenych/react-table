const baseUrl = "https://5eca820038df9600165117b6.mockapi.io/mock";

export const fetchProductsList = () => {
  return fetch(baseUrl)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
};

export const addProduct = (newProduct) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(newProduct),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to create product");
    }
  });
};

export const deleteProduct = (productId) => {
  return fetch(`${baseUrl}/${productId}`, {
    method: "DELETE",
  }).then((res) => {
    if (!res.ok) {
      throw new Error("Failed to delete product");
    }
  });
};

export const updateProduct = (productId, updatedProduct) => {
  return fetch(`${baseUrl}/${productId}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(updatedProduct),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to update product");
    }
  });
};