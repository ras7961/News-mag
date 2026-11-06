const NewsItem = ({ title, description, url, src }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block mx-3 my-3 px-2 py-2"
      style={{ maxWidth: "345px" }}
    >
      <img
        src={
          src
            ? src
            : "https://i.pinimg.com/736x/82/8d/00/828d009786524a079bb9cb8bc80a518b.jpg"
        }
        className="card-img-top"
        style={{ height: "200px", Weight: "325px", objectFit: "cover" }}
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title?.slice(0, 50)}</h5>
        <p className="card-text">
          {description
            ? description.slice(0, 90)
            : "News is current event.It is information about something that has just happened."}
        </p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
