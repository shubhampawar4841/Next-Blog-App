import React from "react";
import image from "next/image";

function navbar() {
  return (
    <div>
      <div>
        <div>
          <Image src="/facebook.png" />
          <Image src="/instagram.png" />
          <Image src="/youtube.png" />
        </div>
        <div>Logo</div>
        <div>HomePage </div>
        <div>Contact </div>
        <div>About </div>
        <div>Login</div>
      </div>
    </div>
  );
}

export default navbar;
