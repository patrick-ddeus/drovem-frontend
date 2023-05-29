import React, { useEffect, useMemo, useState } from 'react';
import Header from '../../components/Header';
import Classes from '../../service/classes';
import Projects from '../../service/projects';
import alert from '../../assets/alert-circle-outline.svg';
import caret from '../../assets/caret-down-outline.svg';
import { ThreeCircles } from 'react-loader-spinner';

import { SideBar, MainContent, ProjectsContent, ClassesList, ListItem, ProjectsList, ProjectItem, Fade, Modal } from './styles';

const choices = {
    "Sem Nota": "sem nota",
    "Abaixo das Expectativas": "abaixo das expectativas",
    "Dentro das Expectativas": "dentro das expectativas",
    "Acima das Expectativas": "acima das expectativas",
};

const body = {};

function StudentPage() {
    const [classList, setClassList] = useState(null);
    const [chosenClass, setChosenClass] = useState("");
    const [chosenProject, setChosenProject] = useState("");
    const [projects, setProjects] = useState(null);
    const [projectsList, setProjectsList] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [loadingGrades, setLoadingGrades] = useState(false);

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
    }, [chosenClass, chosenProject, loadingGrades]);

    const memoizedData = useMemo(() => classList, [classList]);

    const resetItems = () => {
        setChosenClass("");
        setChosenProject("");
    };

    function toggleModal() {
        setModalOpen(!modalOpen);
    }

    const handleOptionClick = async (e) => {
        toggleModal();
        const choice = e.currentTarget.innerText;
        body.nota = choice.toLowerCase();

        setLoadingGrades(true)
        try {
            await Projects.updateGrade(body);
        } catch (error) {
            console.error(error.message);
        } finally{
            setLoadingGrades(false)
        }
    };

    const handleOnClickProject = (id) => {
        body.id = id;
        toggleModal();
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
                    <h2>{projectsList && projectsList[chosenProject-1]?.nome_projeto } Estudantes da Turma {chosenClass}</h2>
                    <ul>
                        {projectsList?.map(project => (
                            <ProjectItem key={project.id}>
                                <div>
                                    <img src={project.foto} alt="" />
                                    {project.nome}
                                </div>
                                <p onClick={() => handleOnClickProject(project.id)}>
                                    {loadingGrades ? (
                                        <ThreeCircles
                                            height="50"
                                            width="50"
                                            color="#b48fab"
                                            wrapperStyle={{}}
                                            wrapperClass=""
                                            visible={true}
                                            ariaLabel="three-circles-rotating"
                                            outerCircleColor=""
                                            innerCircleColor=""
                                            middleCircleColor=""
                                        />
                                    ) : (
                                        <>
                                            {project.nota}
                                            <span>
                                                {project.nota === "sem nota" && (<img src={alert} alt="alerta" />)}
                                            </span>
                                            <img src={caret} alt="caret" className="caret"/>
                                        </>
                                    )}

                                </p>
                            </ProjectItem>
                        ))}
                    </ul>
                </ProjectsContent>
            </MainContent>
            {modalOpen &&
                <Fade onClick={toggleModal}>
                    <Modal >
                        {Object.keys(choices).map(optionValue => (
                            <div onClick={(e) => handleOptionClick(e)}>
                                {optionValue}
                            </div>
                        ))}
                    </Modal>
                </Fade>
            }
        </>
    );
}

export default StudentPage;