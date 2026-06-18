import footerLogo from "../assets/images/circle-Logo.png";

function Footer() {
  return (
    <footer>
      <div className="bg-(--color-neutral) h-80">
        <h3 className="text-center p-4 small text-(--color-primary-content)">
          --- Your favorite food delivery platform connecting customers with
          restaurants and riders. ---
        </h3>

        <div className="text-center mx-20 p-1">
          <img src={footerLogo} alt="Cravings" width="120" />
        </div>
        <hr className=" text-(--color-primary-content) mx-16 mt-10" />
        <div className="footerin flex justify-between mx-16 mt-10  text-(--color-primary-content)">
          <p>© 2026 Cravings. All rights reserved.</p>

          <div className="flex gap-3">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
