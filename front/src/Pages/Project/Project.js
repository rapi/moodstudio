import React, { useEffect, useState } from "react";
import "./Project.css";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import { useHistory, useParams } from "react-router-dom";
import { Loading } from "../../components/Loading/Loading";
import { Carousel } from "antd";

export default function Project() {
  const { slug } = useParams();
  let history = useHistory();

  const [isLoading, setLoading] = useState(true);
  const [project, setProject] = useState([]);
  useEffect(() => {
    fetch("/api/behance/projects")
      .then((e) => e.json())
      .then((e) => {
        console.log(
          e.map(({ url, tags }) => [url, tags[tags.length - 1].title]),
        );
        const project = e.find((project) => project.slug === slug);
        setProject(project);
        if (!project) history.push("/");
        setLoading(false);
      });
  }, []);
  const textList = project.allModules?.filter(({ text }) => text);
  const images =
    project.allModules
      ?.filter((module) => module.components)
      .map((e) =>
        e.components.map(
          (e) =>
            e.imageSizes.allAvailable.find((e) => e.height > window.innerHeight)
              ?.url ??
            e.imageSizes.allAvailable[e.imageSizes.allAvailable.length - 1].url,
        ),
      )
      .flat() ?? [];
  if (isLoading) return <Loading />;
  return (
    <>
      <main id="home">
        <Menu minified />
        <div className="project-container">
          <div className="project-description">
            {textList.map(({ text }, i) => (
              <div key={i} dangerouslySetInnerHTML={{ __html: text }}></div>
            ))}{" "}
          </div>
          <div className="project-images">
            <Carousel dotPosition="right" vertical autoplay>
              {images.map((img) => (
                <div key={img}>
                  <img src={img} />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
