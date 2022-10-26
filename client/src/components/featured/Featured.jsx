import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=berlin,madrid,london"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://th.bing.com/th/id/OIP.MUX1DD6Wt6UOCJLxTiV-YQHaEK?w=267&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Minions</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://th.bing.com/th/id/OIF.IZPumorE9cO7CeinzvFMPg?w=221&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>OnePiece RED</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://th.bing.com/th/id/OIP.9H9njoSS-TD_11MvAmejrgHaD3?w=297&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>TIỆC TRĂNG MÁU</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
