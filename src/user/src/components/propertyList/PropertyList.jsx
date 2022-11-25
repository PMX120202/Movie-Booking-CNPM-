import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

const PropertyList = () => {
  const { data, loading, error } = useFetch("/Movies/countByType");

  const images = [
    "https://th.bing.com/th/id/OIP.n12gnVJXugre2orZt1C0igHaE8?w=262&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIP.3oBdexgo9wzwMLruYzfkGQHaD5?w=296&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIP.c7mwl0UC25fUnRwuZmkC3QHaEK?w=314&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIP.MrUK6P5J_N6WT3ovKYGUPwHaEK?w=312&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIP.fXoGDeSJhSQfSJo_7tviwgHaE8?w=182&h=121&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  ];
  return (
    <div className="pList">
      {loading ? (
        "loading"
      ) : (
        <>
          {data &&
            images.map((img,i) => (
              <div className="pListItem" key={i}>
                <img
                  src={img}
                  alt=""
                  className="pListImg"
                />
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>{data[i]?.count} {data[i]?.type}</h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
