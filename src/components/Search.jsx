import { ReadMore } from "@mui/icons-material";

export const Search = ({ title, description, url, src }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block mx-3 my-3 px-2 py-2"
      style={{ maxWidth: "345px" }}
    >
      <img
        src={
          src
            ? src
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTXq79gin24fjYCkRiLhmRGAP9SObEYhD2nQ&s"
        }
        className="card-img-top"
        style={{ height: "200px", Weight: "325px", objectFit: "cover" }}
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title?.slice(0, 50)}</h5>
        <p className="card-text">
          {description ? description.slice(0, 90) : "NO News on that Title"}
        </p>
        {url ? (
          <a href={url} className="btn btn-primary">
            Read More
          </a>
        ) : (
          " "
        )}
      </div>
    </div>
  );
};
