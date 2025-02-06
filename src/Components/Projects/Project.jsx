import React, { useState } from "react";
import { Box, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button } from "@mui/material";
import onmifood from "../../assets/Projects/onmifood.png";
import todolist from "../../assets/Projects/todo-list.png";
import ffs from "../../assets/Projects/ffs.png";
import styles from "./Projectstyles.module.css";

export default function Project() {
  const projectsarr = [
    {
      link: "https://todo-list-github-io-eight.vercel.app/",
      photo: todolist,
      title: "To-do list",
      description:
        "Developed a fully functional Todo List application using ReactJS, JavaScript , HTML, and CSS. The project showcases dynamic task management with features like adding, editing, and deleting tasks.",
    },
    {
      link: "https://venkataashrith.github.io/Omnifood.github.io/",
      photo: onmifood,
      title: "Omnifood",
      description:
        "Created a responsive frontend for Omnifood, a food delivery service, using HTML, CSS, and JavaScript. The project highlights UI/UX design principles and showcases a user-friendly interface for browsing and ordering food.",
    },
    {
      link: "#",
      photo: ffs,
      title: "Faculty Feedback System",
      description:
        "Developed a web-based platform to streamline faculty feedback collection and evaluation. The system enables students to provide structured feedback categorized by faculty, semester, and division, empowering administrators with actionable insights to improve teaching quality.",
    },
  ];

  const [expanded, setExpanded] = useState({});

  const toggleExpanded = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section id="projects" className={styles.container}>
      <Typography variant="h4" className="sectionTitle" sx={{ fontWeight: "bold", marginBottom: "2rem" }}>
        Projects
      </Typography>

      {/* Project Cards Container */}
      <div className={styles.projectsContainer}>
        {projectsarr.map((project, index) => (
          <Card
            key={index}
            sx={{
              maxWidth: 345,
              boxShadow: 3,
              borderRadius: 4,
              textAlign: "center",
              transition: "transform 200ms ease-in-out",
              "&:hover": { transform: "scale(1.05)" },
            }}
          >
            {/* Project Image */}
            <CardMedia
              component="img"
              height="150"
              image={project.photo}
              alt={project.title}
              sx={{
                backgroundColor: "var(--project-card-bg)",
                borderRadius: "20px",
                margin: "1rem auto 0",
                width: "250px",
                maxWidth: "250px",
              }}
            />
            {/* Card Content */}
            <CardContent>
              <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: "bold" }}>
                {project.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ maxHeight: expanded[index] ? "none" : 80, overflow: "hidden" }}>
                {expanded[index]
                  ? project.description
                  : `${project.description.slice(0, 100)}${project.description.length > 100 ? "..." : ""}`}
              </Typography>
              <Button
                size="small"
                onClick={() => toggleExpanded(index)}
                sx={{ textTransform: "none", marginTop: "0.5rem" }}
              >
                {expanded[index] ? "View Less" : "View More"}
              </Button>
            </CardContent>
            {/* Card Actions */}
            <CardActions sx={{ justifyContent: "center" }}>
              <Button
                size="small"
                color="primary"
                href={project.link}
                target="_blank"
                rel="noopener"
                variant="contained"
                sx={{ textTransform: "none" }}
              >
                Direct Link
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </section>
  );
}
