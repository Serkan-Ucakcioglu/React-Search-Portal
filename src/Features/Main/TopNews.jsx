import React, { useRef } from "react";
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
    {
      id: 4,
      img: image,
      title: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate",
      time: "1h ago",
      createdBy: "by Troy Corlson",
    },
    {
      id: 4,
      img: image,
      title: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate",
      time: "1h ago",
      createdBy: "by Troy Corlson",
    },
    {
      id: 4,
      img: image,
      title: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate",
      time: "1h ago",
      createdBy: "by Troy Corlson",
    },
    {
      id: 4,
      img: image,
      title: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate",
      time: "1h ago",
      createdBy: "by Troy Corlson",
    },
  ];

  const content = topsData?.map((news) => {
    return (
      <div className="news_tops">
        <img
          loading="lazy"
          width={327}
          height={195}
          src={news?.img}
          alt="topnews"
        />
        <div className="news_text">
          <span className="news_title">{news.title}</span>
          <span className="news_time">
            {news.time} ,{news.createdBy}
          </span>
        </div>
      </div>
    );
  });
  const slider = useRef();

  const goLeft = () => {
    slider.current.scrollLeft += 250;
  };
  const goRight = () => {
    slider.current.scrollLeft -= 270;
  };

  return (
    <div className="tops">
      <h1 className="tops_head_title">Top News</h1>
      <div className="content">
        <img className="left" onClick={goLeft} src={left} alt="left" />

        <div className="news" ref={slider}>
          {content}
        </div>
        <img className="right" onClick={goRight} src={left} alt="right" />
      </div>
    </div>
  );
}

export default TopNews;
