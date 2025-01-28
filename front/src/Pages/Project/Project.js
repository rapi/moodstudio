import React, { useEffect, useState } from "react";
import "./Project.css";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import { Link, useHistory, useParams } from "react-router-dom";
import { Loading } from "../../components/Loading/Loading";
import { Carousel, ConfigProvider } from "antd";
export default function Project() {
  const { slug } = useParams();
  let history = useHistory();

  const [isLoading, setLoading] = useState(true);
  const [project, setProject] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setLoading(true);
  }, [slug]);
  useEffect(() => {
    fetch("/api/behance/projects")
      .then((e) => e.json())
      .then((e) => {
        const project = e.find((project) => project.slug === slug);
        setProjects(e.filter((e) => e.slug !== slug).splice(0, 4));
        setProject(project);
        if (!project) history.push("/");
        setLoading(false);
      });
  }, [history, slug]);

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
  const tags = project.tags?.map(({ title }) => title) ?? [];

  if (isLoading) return <Loading />;

  return (
    <ConfigProvider
      theme={{
        components: {
          Carousel: {
            arrowSize: 50,
          },
        },
      }}
    >
      <main id="home">
        <Menu minified />
        <div className="project-container">
          <div className="project-images">
            <Carousel arrows>
              {images.map((img) => (
                <div key={img}>
                  <img alt="MOOD studio project" src={img} />
                </div>
              ))}
            </Carousel>
          </div>
          <div className="project-description">
            {textList.map(({ text }, i) => (
              <div key={i} dangerouslySetInnerHTML={{ __html: text }}></div>
            ))}
            <div className="tag-container">
              {tags.map((tag, i) => (
                <div className="tag">{tag}</div>
              ))}
            </div>
            <div className="projects-container">
              {projects.map((project) => (
                <Link
                  className="project-overview"
                  to={`/project/${project.slug}`}
                  style={{
                    backgroundImage: `url(${project.covers.size_original_webp.url})`,
                  }}
                >
                  <div>{project.name}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </ConfigProvider>
  );
}
