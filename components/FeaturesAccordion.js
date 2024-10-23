"use client";

import { useState, useRef } from "react";
import Image from "next/image";

// The features array is a list of features that will be displayed in the accordion.
// - title: The title of the feature
// - description: The description of the feature (when clicked)
// - type: The type of media (video or image)
// - path: The path to the media (for better SEO, try to use a local path)
// - format: The format of the media (if type is 'video')
// - alt: The alt text of the image (if type is 'image')
const features = [
  {
    title: "Unified Job Listings Across Your Network",
    description:
      "Easily consolidate all job opportunities across projects, ecosystems, and organizations.",
    type: "video",
    path: "https://d3m8mk7e1mf7xn.cloudfront.net/app/newsletter.webm",
    format: "video/webm",
    svg: (
      <svg
        viewBox="0 0 64.00 64.00"
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth="2.816"
        stroke="currentColor"
        className="w-7 h-7"
        fill="none">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path d="M41.71,10.58H28l-7.4,22.28a.1.1,0,0,0,.09.13h8.49a.1.1,0,0,1,.1.13L22.71,52.76a.5.5,0,0,0,.88.45L43.41,26a.1.1,0,0,0-.08-.16H34.42a.11.11,0,0,1-.09-.15l7.47-15A.1.1,0,0,0,41.71,10.58Z"></path>
        </g>
      </svg>
    ),
  },
  {
    title: "Fully Customizable Design & Layout",
    description:
      "Ensure your job board aligns perfectly with your brand identity — no compromises.",
    type: "image",
    path: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    alt: "A computer",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-7 h-7">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
        />
      </svg>
    ),
  },
  {
    title: "Advanced Search & Filter Options",
    description:
      "Empower users to search smarter with dynamic filters like salary range, location, remote roles, and more.",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        fill="none"
        stroke="currentColor"
        className="w-7 h-7">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path
            fill="#231F20"
            d="M20.745,32.62c2.883,0,5.606-1.022,7.773-2.881L39.052,40.3c0.195,0.196,0.452,0.294,0.708,0.294 c0.255,0,0.511-0.097,0.706-0.292c0.391-0.39,0.392-1.023,0.002-1.414L29.925,28.319c3.947-4.714,3.717-11.773-0.705-16.205 c-2.264-2.27-5.274-3.52-8.476-3.52s-6.212,1.25-8.476,3.52c-4.671,4.683-4.671,12.304,0,16.987 C14.533,31.37,17.543,32.62,20.745,32.62z M13.685,13.526c1.886-1.891,4.393-2.932,7.06-2.932s5.174,1.041,7.06,2.932 c3.895,3.905,3.895,10.258,0,14.163c-1.886,1.891-4.393,2.932-7.06,2.932s-5.174-1.041-7.06-2.932 C9.791,23.784,9.791,17.431,13.685,13.526z"></path>
        </g>
      </svg>
    ),
  },
  {
    title: " Intelligent Warm Intros for Better Hiring",
    description:
      "Help companies make strategic connections through curated introductions — driving both hiring speed and sales lead quality.",
    svg: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        className="w-7 h-7">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"></path>{" "}
          <path
            d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"></path>{" "}
        </g>
      </svg>
    ),
  },
  {
    title: "Economical Plans for Every Business",
    description:
      "From startups to global networks, our budget-friendly pricing ensures access to top-tier features for all.",
    svg: (
      <svg
        fill="black"
        viewBox="0 0 256 256"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-7 h-7">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path d="M97.85352,185.8335c-5.04,15.11914-17.16211,26.26318-35.05664,32.228a88.27924,88.27924,0,0,1-25.30665,4.44825,4.0002,4.0002,0,0,1-4-4,88.27688,88.27688,0,0,1,4.44825-25.30665C43.90332,175.30859,55.04785,163.186,70.167,158.14648a3.99987,3.99987,0,1,1,2.5293,7.58936c-24.91016,8.30371-29.93945,37.49268-30.95215,48.52,11.02344-1.01172,40.21582-6.04,48.51953-30.95215a4.00018,4.00018,0,0,1,7.58985,2.52979ZM198.71,108.20117l-10.1416,10.1416v62.91211a11.92374,11.92374,0,0,1-3.51367,8.48487L152.71191,222.082A11.99995,11.99995,0,0,1,132.46,215.9502l-8.14429-40.72315-43.54223-43.542L40.05078,123.54a11.99947,11.99947,0,0,1-6.13281-20.252l32.3418-32.3418a11.925,11.925,0,0,1,8.48535-3.51465h62.91162l10.14209-10.14258c27.30078-27.30078,55.10351-26.54,65.78906-24.94531a11.90048,11.90048,0,0,1,10.06836,10.06738C225.251,53.09766,226.01172,80.89941,198.71,108.20117ZM41.61914,115.69531l39.81152,7.9624,48.2262-48.22607H74.74512a3.97492,3.97492,0,0,0-2.8291,1.17188l-32.3418,32.3413a4.00043,4.00043,0,0,0,2.04492,6.75049Zm138.94922,10.64746-48.22669,48.227,7.962,39.811a4.00088,4.00088,0,0,0,6.75195,2.04394l32.3418-32.34179a3.97415,3.97415,0,0,0,1.1709-2.82813ZM193.05371,102.544c24.72852-24.729,24.10547-49.46436,22.69043-58.95118a3.946,3.946,0,0,0-3.33594-3.33691c-9.48925-1.415-34.22461-2.03809-58.95312,22.69043l-11.31262,11.3125-.00135.00146L88.40234,128,128,167.59814l53.73962-53.73974.00086-.001Z"></path>{" "}
        </g>
      </svg>
    ),
  },
];

// An SEO-friendly accordion component including the title and a description (when clicked.)
const Item = ({ feature, isOpen, setFeatureSelected }) => {
  const accordion = useRef(null);
  const { title, description, svg } = feature;

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-medium text-left md:text-lg"
        onClick={(e) => {
          e.preventDefault();
          setFeatureSelected();
        }}
        aria-expanded={isOpen}>
        <span className={`duration-100 ${isOpen ? "text-[#013533]" : ""}`}>{svg}</span>
        <span
          className={`flex-1 text-base-content ${isOpen ? "text-[#013533] font-semibold" : ""}`}>
          <h3 className="inline">{title}</h3>
        </span>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out text-base-content-secondary overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }>
        <div className="pb-5 leading-relaxed">{description}</div>
      </div>
    </li>
  );
};

// A component to display the media (video or image) of the feature. If the type is not specified, it will display an empty div.
// Video are set to autoplay for best UX.
const Media = ({ feature }) => {
  const { type, path, format, alt } = feature;
  const style = "rounded-2xl aspect-square w-full sm:w-[26rem]";
  const size = {
    width: 500,
    height: 500,
  };

  if (type === "video") {
    return (
      <video
        className={style}
        autoPlay
        muted
        loop
        playsInline
        controls
        width={size.width}
        height={size.height}>
        <source src={path} type={format} />
      </video>
    );
  } else if (type === "image") {
    return (
      <Image
        src={path}
        alt={alt}
        className={`${style} object-cover object-center`}
        width={size.width}
        height={size.height}
      />
    );
  } else {
    return <div className={`${style} !border-none`}></div>;
  }
};

// A component to display 2 to 5 features in an accordion.
// By default, the first feature is selected. When a feature is clicked, the others are closed.
const FeaturesAccordion = () => {
  const [featureSelected, setFeatureSelected] = useState(0);

  return (
    <section
      className="py-24 md:py-32 space-y-24 md:space-y-32 max-w-7xl mx-auto bg-base-100 "
      id="features">
      <div className="px-8">
        <h2 className="font-extrabold text-4xl lg:text-6xl tracking-tight mb-12 md:mb-24 text-center">
          WorkPadHQ’s Core Features:
        </h2>
        <div className=" flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="grid grid-cols-1 items-stretch gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-20">
            <ul className="w-full">
              {features.map((feature, i) => (
                <Item
                  key={feature.title}
                  index={i}
                  feature={feature}
                  isOpen={featureSelected === i}
                  setFeatureSelected={() => setFeatureSelected(i)}
                />
              ))}
            </ul>

            {/* <Media feature={features[featureSelected]} key={featureSelected} /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesAccordion;
