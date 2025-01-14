import React, {useEffect, useState} from "react";
import "./Overview.css";
import { Container } from "react-bootstrap";
import {Carousel, Flex, Tag} from 'antd';
export default function Overview({filter}) {
  const [projects,setProjects]=useState([])
  useEffect(() => {
    fetch("/api/behance/projects")
        .then(e=>e.json())
        .then(e=>e.filter((e)=>e.covers.size_808?.url))
        .then(e=> {
            console.log(e)
            setProjects(filter ? e.filter(({fields}) => fields.find(({label})=>label.includes(filter))) : e)
        })
  }, [filter]);
  const images = projects.map(project=>project.allModules.filter(module=>module.components).map(e=>e.components.map(e=>e.imageSizes.size_disp.url)).flat()??[])
  return (
    <section id="overview">
      <Container fluid>
        {projects.map((project,i)=><>
        <div className="content">
          <div className="grid-section">
              <div className={i % 2 ? 'text' : 'text reverse'}>
                  <h5 className="title">{new Date(project.publishedOn*1000).toLocaleDateString()}</h5>
                  <h3 className="subtitle">{ project.name}</h3>
                  <p className="desc">
                      {project.description}
                  </p>
                  <Flex gap="4px 0" wrap>
                      {project.tags.map(({title}) => <Tag key={title} color="magenta">{title}</Tag>)}
                  </Flex>
              </div>
              <Carousel autoplay>
                  {images[i].map((image) => <div>
                      <img key={image} src={image} alt="img grid"/>
                  </div>
                  )}

              </Carousel>
          </div>
        </div>
        </>)}

      </Container>
    </section>
  );
}
