
import './introduction.scss';
import ImageMoi from '../images/moi.jpg';



const Introduction = () => {
  return (
    <div className="introduction">
      <div className="introduction-content">
        <h1 className="introduction-title">Présentation</h1>
        <p className="introduction-text">
          Je suis un jeune développeur qui a beaucoup de projets en tête, notamment de devenir un bon développeur full-stack ! Je désire apprendre toujours plus de langage de programation.
          J'ai des notions de python, OCaml et C grâce à une année de licence informatique ainsi qu'une formation de dévelopeur full-stack.
        </p>
      </div>
      <div className='introduction-image'>
          <img src={ImageMoi} alt="Moi" />
      </div>
    </div>
  );
}

export default Introduction;