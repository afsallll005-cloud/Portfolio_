"use client";

import "./Services.css";
import { FiArrowUpRight, FiCode, FiBarChart2 } from "react-icons/fi";

const services = [
  {
    id: "01",
    title: "BUSINESS BRANDING",
    description:
      "We create unique brand identities that represent your business and connect with your audience.",
    tags: ["Brand Identity", "Brand Strategy", "Visual Design"],
    type: "branding",
    icon: <FiBarChart2 />,
  },
  {
    id: "02",
    title: "WEB DEVELOPMENT",
    description:
      "We build fast, responsive and modern websites that deliver a smooth user experience.",
    tags: ["Custom Websites", "Web Applications", "SEO Friendly"],
    type: "development",
    icon: <FiCode />,
  },
  {
    id: "03",
    title: "UI / UX DESIGN",
    description:
      "We design clean and intuitive digital experiences focused on usability and conversion.",
    tags: ["UI Design", "UX Research", "Prototyping"],
    type: "uiux",
    icon: <FiBarChart2 />,
  },
];

function BrandingVisual() {
  return (
    <div className="service-visual branding-visual">
      <div className="branding-cylinder cylinder-one" />
      <div className="branding-cylinder cylinder-two" />
      <div className="branding-cylinder cylinder-three" />
    </div>
  );
}

function DevelopmentVisual() {
  return (
    <div className="service-visual development-visual">
      <div className="dev-card dev-card-one">
        <span>&lt;/&gt;</span>
        <div />
        <div />
        <div />
      </div>

      <div className="dev-card dev-card-two">
        <span>UI</span>
        <div />
        <div />
        <div />
      </div>

      <div className="dev-block block-red">
        {"</>"}
      </div>

      <div className="dev-block block-blue">
        {"{}"}
      </div>

      <div className="dev-block block-white">
        {"+"}
      </div>
    </div>
  );
}

function UiUxVisual() {
  return (
    <div className="service-visual uiux-visual">
      <div className="ui-phone phone-one">
        <div className="phone-header" />
        <div className="phone-line" />
        <div className="phone-line short" />
        <div className="phone-button" />
      </div>

      <div className="ui-phone phone-two">
        <div className="phone-header" />
        <div className="phone-line" />
        <div className="phone-line short" />
        <div className="phone-button" />
      </div>

      <div className="floating-dot dot-one" />
      <div className="floating-dot dot-two" />
    </div>
  );
}

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-container">

        {/* HEADER */}
        <div className="services-header">
          <div className="services-label">
            <span />
            WHAT WE DO
          </div>

          <h2 className="services-title">
            <span>SERVICES</span>
            <b>-</b>
            <strong>SERVICES</strong>
          </h2>

          <p className="services-intro">
            We help brands grow with creative design,
            <br />
            strong identity and modern development.
          </p>
        </div>

        {/* SERVICES */}
        <div className="services-list">
          {services.map((service) => (
            <article
              className={`service-card ${service.type}`}
              key={service.id}
            >
              <div className="service-card-inner">

                {/* LEFT CONTENT */}
                <div className="service-content">

                  <div className="service-number">
                    {service.id}
                  </div>

                  <div className="service-icon">
                    {service.icon}
                  </div>

                  <div className="service-info">
                    <h3>{service.title}</h3>

                    <p>{service.description}</p>

                    <div className="service-tags">
                      {service.tags.map((tag) => (
                        <span key={tag}>
                          <i />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* RIGHT VISUAL */}
                <div className="service-image-wrapper">
                  {service.type === "branding" && <BrandingVisual />}
                  {service.type === "development" && (
                    <DevelopmentVisual />
                  )}
                  {service.type === "uiux" && <UiUxVisual />}
                </div>

                {/* ARROW */}
                <button
                  className="service-arrow"
                  aria-label={`View ${service.title}`}
                >
                  <FiArrowUpRight />
                </button>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}