import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Flashcards App. Built with React.</p>
    </footer>
  );
}

export default Footer;
