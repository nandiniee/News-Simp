import React from "react";

const NewsComponents = (props) => {
  const { title, descriptions, imageUrl, newsUrl, date, source } = props;
  return (
    <>
      <div className="container my-3">
        <div className="card" style={{ width: "18rem" }}>
          <div
            className="badge"
            style={{ position: "absolute", zIndex: 1, left: "60%" }}
          >
            <span
              className="position-absolute top-0 right-0 translate-middle badge rounded-pill bg-danger"
              style={{ left: "85%", zIndex: 1, fontSize: "0.8rem" }}
            >
              {source}
            </span>
          </div>
          <img
            src={
              !imageUrl
                ? "https://www.investors.com/wp-content/uploads/2021/09/Stock-capitalhilll-11-adobe.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{descriptions}</p>
            <p className="card-text">
              <small className="text-muted">
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm"
              style={{
                backgroundColor: "#656565",
                color: "#fff",
                border: "none",
              }}
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsComponents;
