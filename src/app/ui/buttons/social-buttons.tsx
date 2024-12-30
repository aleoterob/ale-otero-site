import Image from "next/image";
import Link from "next/link";

const SocialButtons = () => {
  return (
    <div className="flex flex-row gap-2">
      <Link href="https://www.linkedin.com/in/aleoterob/" legacyBehavior>
        <a target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/linkedin-icon.svg"
            alt="LinkedIn Icon"
            width={30}
            height={30}
            priority
            className="cursor-pointer"
          />
        </a>
      </Link>
      <Link href="https://github.com/aleoterob" legacyBehavior>
        <a target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/github-icon.svg"
            alt="GitHub Icon"
            width={30}
            height={30}
            priority
            className="cursor-pointer"
          />
        </a>
      </Link>
      <Link href="https://www.behance.net/aleoterob" legacyBehavior>
        <a target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/behance-icon.svg"
            alt="Behance Icon"
            width={30}
            height={30}
            priority
            className="cursor-pointer"
          />
        </a>
      </Link>
    </div>
  );
};

export default SocialButtons;
