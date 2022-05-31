import '../App.css'

const Project = ({ projectName, projectImg, projectTecnologies }) => {
  return (
  <div className="portfolioProject padd15">
            <div className="portfolioProjectInner">
              <div className="portfolioProjectThumbnail">
                <img src={projectImg} alt="avatar" />
                <div className="mask"></div>
              </div>
              <span className="term">{projectTecnologies}</span>
              <h3 className="portfolioItemTitle">{projectName}</h3>
              <span className="moreButton">&hellip;</span>
            </div>
          </div>
          )
}

export default Project;