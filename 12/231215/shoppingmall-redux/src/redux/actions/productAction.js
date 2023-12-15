//연산작업 후 reducer한테보내야함

const getProduct = (searchQuery) => {
  //왜 return 값으로 주냐 ?? reducer한테 전달할 값은 return값으로 전달되기 때문이다리
  //reducer한테 전달하기 위한 dispatch 인자값
  return async (dispatch) => {
    const url = `https://my-json-server.typicode.com/ch9901/shopping-study/products?q=${searchQuery}`;
    const response = await fetch(url);
    const data = await response.json();

    dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
  };
};

//export 할거다 productAction의 이름으로 getProduct 함수를
export const productAction = { getProduct };
