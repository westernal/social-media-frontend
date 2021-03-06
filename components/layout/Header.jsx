import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="header">
      <p>westernal</p>
      <Link href={"/newpost"}>
        <a aria-label="add" id="add-btn">
          <Image
            src={"/Images/add.svg"}
            width={30}
            height={30}
            alt="add button"
          />
        </a>
      </Link>
    </div>
  );
};

export default Header;
