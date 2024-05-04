export default function Banner() {
  const social_links = [
    {
      url: "https://github.com/gaurav-vala",
      icon: `<svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 496 512"
    >
      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
    </svg>`,
    },
    {
      url: "www.linkedin.com/in/gaurav-vala",
      icon: ` <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 448 512"
    >
      <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
    </svg>`,
    },
    {
      url: "mailto:gauravvala492@gmail.com",
      icon: ` <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="-5.0 -2.0 110.0 100.0"
    >
      <path d="m93.75 28.125c0-5.1758-4.1992-9.375-9.375-9.375h-68.75c-5.1758 0-9.375 4.1992-9.375 9.375v43.75c0.003906 1.3867 0.32422 2.7578 0.9375 4 0.91016 1.8438 2.4062 3.3398 4.25 4.25 1.2891 0.69531 2.7227 1.082 4.1875 1.125h68.75c1.3984-0.007812 2.7734-0.32812 4.0312-0.9375 1.8438-0.91016 3.3398-2.4062 4.25-4.25 0.69922-1.2852 1.0742-2.7227 1.0938-4.1875zm-42.344 24.406c-0.37109 0.37891-0.87891 0.58984-1.4062 0.58984s-1.0352-0.21094-1.4062-0.58984l-31.344-27.531h65.625zm-38.906-23.375 22.062 19.375-22.062 22.062zm4.4062 45.844 22.375-22.344 5.1875 4.5625c3.1289 2.8672 7.9336 2.8672 11.062 0l5.1875-4.5625 22.375 22.344zm48.531-26.469 22.062-19.375v41.438z" />
    </svg>`,
    },
  ];

  return (
    <>
      <div className="container mx-auto px-6 mt-6">
        <div className="profile_container w-56 aspect-square overflow-hidden rounded-2xl shadow-black_2 border border-black">
          <img
            className="w-full h-full object-cover object-top"
            src="./assets/pfp.jpg"
            alt=""
          />
        </div>

        <div className="meta_container pt-6">
          <h1 className="text-4xl font-bold">
            Hey! I am <span className="">Gaurav</span>
          </h1>
          <p className="leading-8 pt-4 text-xl text-gray-700">
            I want to create good web experience with the goal to become a
            unicorn developer. I read books, make music and watch alot of anime
          </p>

          <a
            className="inline-block p-4 bg-white rounded-2xl mt-3 text-black font-semibold text-xl border border-black shadow-2xl shadow-black hover:shadow-black_hover transition-all"
            href="https://drive.google.com/file/d/1FCnGGdwwRGwifGl03xxB3GNfyDv7an5F/view?usp=drive_link"
          >
            Download Resume
          </a>
        </div>

        <div className="social_links_container pt-6">
          <ul className="flex gap-4 flex-wrap">
            {social_links.map((single_social_link, index) => (
              <li key={index}>
                <a href={single_social_link.url}>
                  <span
                    className="[&>svg]:h-7 [&>svg]:w-7 p-3 border border-black hover:shadow-black_2 transition-all rounded-xl inline-block"
                    dangerouslySetInnerHTML={{
                      __html: single_social_link.icon,
                    }} // Render SVG code as HTML
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
