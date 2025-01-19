import React, { useEffect, useState } from "react";
import "./Overview.css";
import CardContainer from "../Card/CardContainer";
import Card from "../Card/Card";
import { Loading } from "../Loading/Loading";
export default function Overview({ filter }) {
  const [isLoading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("/api/behance/projects")
      .then((e) => e.json())
      .then((e) => e.filter((e) => e.covers.size_808?.url))
      .then((e) => {
        setProjects(
          filter
            ? e.filter(({ fields }) =>
                fields.find(({ label }) => label.includes(filter)),
              )
            : e,
        );
        setLoading(false);
      });
  }, [filter]);
  return isLoading ? (
    <Loading />
  ) : (
    <div className="overview">
      <CardContainer>
        {projects.map((project, i) => (
          <Card
            image={project.covers.size_original_webp.url}
            title={project.name}
            link={project.url}
          ></Card>
        ))}
      </CardContainer>
    </div>
  );
}
