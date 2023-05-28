import React, { useEffect, useMemo, useState } from 'react';
import Header from '../../components/Header';
import Classes from '../../service/classes';
import Projects from '../../service/projects';
import alert from '../../assets/alert-circle-outline.svg';
import { SideBar, MainContent, ProjectsContent, ClassesList, ListItem, ProjectsList, ProjectItem } from './styles';

function StudentPage() {
    const [classList, setClassList] = useState(null);
    const [chosenClass, setChosenClass] = useState("");
    const [chosenProject, setChosenProject] = useState("");
    const [projects, setProjects] = useState(null);
    const [projectsList, setProjectsList] = useState(null);

    useEffect(() => {
        const fetchClasses = async () => {
            try {
                const response = await Classes.getAllClasses();
                setClassList(response);
            } catch (error) {
                console.error(error);
            }
        };

        const fetchProjects = async () => {
            try {
                const response = await Projects.getAllProjects();
                setProjects(response);
            } catch (error) {
                console.error(error.message);
            }
        };

        fetchClasses();
        fetchProjects();
    }, []);

    useEffect(() => {
        const fetchProjectList = async () => {
            try {
                const response = await Projects.listDoneProjects(chosenProject, chosenClass);
                setProjectsList(response);
            } catch (error) {
                console.error(error.message);
            }
        };

        fetchProjectList();
    }, [chosenClass, chosenProject]);

    const memoizedData = useMemo(() => classList, [classList]);

    const resetItems = () => {
        setChosenClass("");
        setChosenProject("");
    };
    return (
        <>
            <Header />
            <MainContent>
                <SideBar>
                    <ClassesList>
                        <ListItem
                            underlined={chosenClass === ""}
                            onClick={resetItems}>
                            Mostrar todos
                        </ListItem>
                        {memoizedData?.map((turma) => (
                            <ListItem
                                key={turma.id}
                                underlined={chosenClass === turma.id}
                                onClick={() => setChosenClass(turma.id)}>
                                {turma.nome}
                            </ListItem>
                        ))}
                    </ClassesList>
                    <ProjectsList>
                        {projects?.map(projeto => (
                            <ListItem
                                key={projeto.id}
                                underlined={chosenProject === projeto.id}
                                onClick={() => setChosenProject(projeto.id)}>
                                {projeto.nome}
                            </ListItem>
                        ))}
                    </ProjectsList>
                </SideBar>
                <ProjectsContent>
                    {projectsList?.map(project => (
                        <ProjectItem>
                            <div>
                                <img src={project.foto} alt="" />
                                {project.nome}
                            </div>
                            <p>
                                {project.nota}
                                <span>
                                    {project.nota === "sem nota" && (<img src={alert} alt="alerta" />)}
                                </span>
                            </p>
                        </ProjectItem>
                    ))}
                </ProjectsContent>
            </MainContent>
        </>
    );
}

export default StudentPage;