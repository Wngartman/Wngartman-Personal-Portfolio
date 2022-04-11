import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <footer id="learn-more" className="bg-dark text-center text-white">
      <div className="container p-4 pb-0">
        <section className="mb-4">
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://github.com/Wngartman"
            role="button"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://www.linkedin.com/in/william-gartman-23900a226/"
            role="button"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://drive.google.com/file/d/1dOhrO_lgLvoOsmA6xSDqcffuEPpQLC16/view?usp=sharing"
            role="button"
          >
            <i className="fa-regular fa-file-lines"></i>
          </a>
        </section>
      </div>

      <div class="footBack text-center p-3">
        © 2022 Copyright:
        <a
          className="text-white"
          href="https://www.linkedin.com/in/william-gartman-23900a226/"
        >
          William Gartman
        </a>
      </div>
    </footer>
  );
}
export default Footer;
