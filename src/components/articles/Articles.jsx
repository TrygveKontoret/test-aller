import { url } from "../../utils/api";
import axios from "axios";
import { StyledArticle, width } from "./StyledArticles";
import { useState, useEffect, useRef } from "react";

export const Articles = () => {
  const [data, setData] = useState(0);
  const [titleEdit, setTitleEdit] = useState([]);

  const fetchData = async () => {
    const data = await axios.get(url);
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const titleRef = useRef();

  const editTitle = (e) => {
    setTitleEdit(e.target.id);
  };

  return (
    <>
      <StyledArticle>
        {data &&
          data.data[0].map((d, idx) => {
            return (
              <div className="rows" key={idx}>
                {d.columns.map((article, index) => {
                  return (
                    <div
                      className="article"
                      style={{ width: (width.large / 12) * article.width }}
                      key={index}
                    >
                      <div className="imgContainer">
                        <img
                          src={
                            article.imageUrl +
                            `&width=${(width.large / 12) * article.width}`
                          }
                          alt={"image of " + `${article.title}`}
                        />
                      </div>

                      <div className="title">
                        {titleEdit !== article.title && (
                          <>
                            <a href={article.url}>
                              <h2>{article.title}</h2>
                            </a>

                            <button onClick={editTitle} id={article.title}>
                              Change title
                            </button>
                          </>
                        )}
                        {titleEdit === article.title && (
                          <>
                            <input
                              type="text"
                              ref={titleRef}
                              defaultValue={article.title}
                            />
                            <button
                              onClick={() => {
                                article.title = titleRef.current.value;
                                setTitleEdit([]);
                              }}
                            >
                              Save new title
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
      </StyledArticle>
    </>
  );
};
