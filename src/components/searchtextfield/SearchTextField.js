import React, { useEffect, useState, useRef } from "react";
import productApi from "../../api/productApi";
import "./SearchProduct.scss";

function useOuterClick(callback) {
  const innerRef = useRef();
  const callbackRef = useRef();

  // set current callback in ref, before second useEffect uses it
  useEffect(() => {
    // useEffect wrapper to be safe for concurrent mode
    callbackRef.current = callback;
  });

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);

    // read most recent callback and innerRef dom node from refs
    function handleClick(e) {
      if (
        innerRef.current &&
        callbackRef.current &&
        !innerRef.current.contains(e.target)
      ) {
        callbackRef.current(e);
      }
    }
  }, []); // no need for callback + innerRef dep

  return innerRef; // return ref; client can omit `useRef`
}

export default function CustomizedInputBase(props) {
  const [product, setProduct] = useState("");
  const [value, setValue] = useState({ text: "" });
  const [word, setWord] = useState(null);
  const [listProduct, setListProduct] = useState([]);
  const fetchProductApi = async () => {
    const response = await productApi.fetchProductApi("product");
    setProduct(response);
  };
  useEffect(() => {
    fetchProductApi();
  }, []);
  const typingTimeoutRef = useRef(null);
  const onHandleChangeWordSearch = (e) => {
    // if(!onSearch) return;
    const value = e.target.value;
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      // props.onSearch(value);
      onSearch(value);
      props.onValue(value);
    }, 5e2);
    console.log(value);
  };
  var productZ = [];
  for (let i = 0; i < product.length; i++) {
    for (let j = 0; j < product[i].items.length; j++) {
      let detail = Object.assign(product[i].items[j], { i });
      productZ = productZ.concat(detail);
      // console.log(detail);
    }
  }
  // console.log(productZ);

  const onSearch = async (word) => {
    setCount(true);
    setWord(word);
    if (word) {
      let listProduct = productZ;
      let listProduct2 = null;
      listProduct = await productZ.filter((mem) => {
        return mem.id.toLowerCase().indexOf(word) !== -1;
      });
      listProduct2 = await productZ.filter((mem) => {
        return mem.title.toLowerCase().indexOf(word) !== -1;
      });
      listProduct = await [...listProduct, ...listProduct2];

      listProduct = await listProduct.reduce((unique, o) => {
        if (!unique.some((obj) => obj.id === o.id)) {
          unique.push(o);
        }
        return unique;
      }, []);
      setListProduct(listProduct);
    }
    // }
  };
  // console.log(listProduct);
  const onClickProduct = (index, index1, index2, i) => {
    setWord(null);
    props.onClickProduct(index, index1, index2, i);
    setValue({ text: listProduct[index].title });
  };
  const onHandleName = (e) => {
    setValue({ text: e.target.value });
  };
  const handleClickOutside = () => {
    console.log("hi");
  };
  const [count, setCount] = useState(true);
  const innerRef = useOuterClick((e) => {
    setCount(false);
  });
  // console.log(listProduct);
  return (
    <div className="searchproduct" onChange={onHandleChangeWordSearch}>
      <input
        name="keyword"
        type="text"
        placeholder="Nhập từ khóa..."
        autoComplete="off"
        value={value.text}
        onChange={onHandleName}
      />
      {listProduct && listProduct.length !== 0 && word && count === true ? (
        <div
          className="searchproduct__nameproduct"
          id="container"
          ref={innerRef}
          style={{
            height: "300px",
            overflowY: "scroll",
            border: "1px solid black",
            borderRadius: "4px",
            position: "absolute",
            zIndex: "100",
            backgroundColor: "white",
          }}
        >
          {listProduct.map((item, index) => {
            // console.log(item.version);
            return (
              <div className="searchproduct__nameproduct__version">
                {item.version &&
                  item.version.map((item1, index1) => {
                    return (
                      <>
                        {item1.type &&
                          item1.type.map((item2, index2) => {
                            return (
                              <div
                                className="searchproduct__nameproduct__version__type"
                                style={{
                                  display: "flex",
                                  borderBottom: "1px solid #D7D8DA",
                                  padding: "5px",
                                }}
                                onClick={() => {
                                  onClickProduct(
                                    index,
                                    index1,
                                    index2,
                                    listProduct[index].i
                                  );
                                }}
                              >
                                <img
                                  className="col-2"
                                  src={item2.image}
                                  style={{ maxWidth: "30%" }}
                                />
                                <div
                                  className="col-10"
                                  // style = {{ display: 'flex'}}
                                >
                                  {/* &ensp;|&ensp; */}
                                  <p>{item.title}</p>
                                  <p>{item1.capacity}</p>
                                  <p>{item2.color}</p>
                                </div>
                              </div>
                            );
                          })}
                      </>
                    );
                  })}
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
