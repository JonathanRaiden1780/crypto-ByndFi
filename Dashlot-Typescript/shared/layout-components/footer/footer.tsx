import Link from "next/link";
import { FC } from "react";

interface FooterProps { }

const Footer: FC<FooterProps> = () => {
  return (
    <>
      <footer className="footer mt-auto text-center footer-custom">
        <div className="container">
          <div className="mt-2 mb-2 text-center">
            Copyright © <span id="year">2025</span>{" "}
            <Link href="#!" className="fs-14 text-primary fw-bold">
              beyondfi
            </Link>
            . CryptToGo All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
