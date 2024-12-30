import SocialButtons from "../buttons/social-buttons";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center bg-background text-foreground text-xs py-4 text-center border-t border-greyVercel border-solid">
      <SocialButtons />
      <p className="text-center pt-4">Copyright © 2024 Alejandro Otero</p>
    </footer>
  );
}
