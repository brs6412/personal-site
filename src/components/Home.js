import React from "react";

export default function Home() {
  return (
    <div>
      <div>
        <h2>Home</h2>
        <p>
          Welcome to my website. Please feel free to read more{" "}
          <a href="/about">about me</a>, or you can check out my{" "}
          <a href="/resume">resume</a>, or <a href="/contact">contact</a> me.
        </p>
      </div>
      <div>
        <h4>About this site</h4>
        <p>
          This site is being hosted on Github pages, configured to use the
          custom domain that I own. During test, I hosted it locally on a
          Raspberry Pi that I configured myself. I served the web files using
          Nginx, and I also implemented SSL/TLS certificates for HTTPS and
          established firewall rules with UFW to simulate securing a dedicated
          public facing web server.
        </p>
        <div>
          <p>
            This website is crafted using React JavaScript coupled with the
            React Bootstrap framework. React allows for creation of dynamic and
            responsive web applications, providing a smooth and interactive user
            experience.
          </p>
          <a href="https://github.com/brs6412/bensippel-website">
            View page source here.
          </a>
        </div>
      </div>
    </div>
  );
}
