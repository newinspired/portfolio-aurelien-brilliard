import ProjectsCard from "../project in progress/projects-card";
import luffy from '../images/luffy.jpg';
import imageLoft from '../images/imageLoft.jpeg';

import './Home.scss';



const Home = () => {
  return (
    <div className="main">
        <div className="projects-title">
            <h2>Projets en cours :</h2>
        </div>
        <div className="cards" id="projects">
            <ProjectsCard 
            title="Questionnaire One Piece sur l'univers du manga" 
            description="Utilisation de React, Vite, node.js, Express, MongoDB et socket.js (calcul des scores, gestion des temps de réponse etc.)." 
            picture={luffy}
            githubLink="https://github.com/newinspired/Manga-Lore"
            />
            <ProjectsCard 
            title="Création d'un site de Loft de luxe" 
            description="Utilisation de langage simple HTML, CSS et JavaScript pour la création d'un site vitrine. La principale difficulté rencontrée sur ce site est la création des animations." 
            picture={imageLoft}
            githubLink="https://github.com/newinspired/Eclipse1723"
            />
        </div>

        <div className="projects-title">
            <h2>Projets réalisés durant ma formation :</h2>
        </div>
        <div className="cards">
            <ProjectsCard 
            title="Création d'une application web de location immobilière" 
            description="Utilisation de React Vite et router pour configurer la navigation ainsi que SCSS et node.js
            J'ai rencontré des difficultés à gérer le routage entre les pages avec React Router mais l'utilisation des hooks comme useNavigate et useParams m'ont permis une navigation fluide." 
            githubLink="https://github.com/newinspired/projet-5-kasa-react-vite"
            />
            <ProjectsCard 
            title="Back-end d'un site de notation de livres" 
            description="Création d'une API REST avec Node.js, Express et MongoDB. J’ai rencontré des difficultés à sécuriser les opérations CRUD et à implémenter un système d’authentification robuste avec Express et MongoDB. J'ai utilisé des middlewares comme JWT et bcrypt, et structuré mon API selon l’architecture MVC"
            githubLink="https://github.com/newinspired/full-stack-mon-vieux-grimoire"
            />
        </div>


    </div>
  );
};

export default Home;