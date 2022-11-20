import React from "react";
import image from "../../Svg/Image.svg";
import left from "../../Svg/Left.svg";

function TopNews() {
  const topsData = [
    {
      id: 1,
      img: image,
      title: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate",
      time: "1h ago",
      createdBy: "by Troy Corlson",
    },
    {
      id: 2,
      img: image,
      title: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate",
      time: "1h ago",
      createdBy: "by Troy Corlson",
    },
    {
      id: 3,
      img: image,
      title: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate",
      time: "1h ago",
      createdBy: "by Troy Corlson",
    },
  ];

  const content = topsData?.map((news) => {
    return (
      <div className="news_tops">
        <img loading="lazy" src={news?.img} alt="topnews" />
        <div className="news_text">
          <span className="news_title">{news.title}</span>
          <span className="news_time">
            {news.time} ,{news.createdBy}
          </span>
        </div>
      </div>
    );
  });

  return (
    <div className="tops">
      <h1 className="tops_head_title">Top News</h1>
      <div className="news">
        <img className="left" src={left} alt="left" />
        {content}
        <img className="right" src={left} alt="right" />
      </div>
    </div>
  );
}

export default TopNews;
