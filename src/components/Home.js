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
          This site is being hosted on a Raspberry pi configured by myself. The
          pi is running a web server, providing fast and reliable delivery of
          web content.
        </p>
        <p>
          <p>
            This website is crafted using React JavaScript coupled with the
            React Bootstrap framework. React allows for creation of dynamic and
            responsive web applications, providing a smooth and interactive user
            experience.
          </p>
          <a href="https://github.com/brs6412/bensippel-website">
            View page source here.
          </a>
        </p>
      </div>
    </div>
  );
}
