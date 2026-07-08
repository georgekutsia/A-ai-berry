export default function Footer({ brand, content }) {
  return (
    <footer className="site-footer">
      <p>{brand}</p>
      <span>{content.rights}</span>
    </footer>
  );
}
