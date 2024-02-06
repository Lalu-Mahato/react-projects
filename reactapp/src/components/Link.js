import PropTypes from "prop-types";

function Link({ title, content, url }) {
  return (
    <div>
      <a href={url}>{title}</a>
      <p>{content}</p>
    </div>
  );
}

Link.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  url: PropTypes.string,
};

export default Link;
