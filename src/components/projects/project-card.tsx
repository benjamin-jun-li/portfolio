import DisplayBoard from "./display-board";

const ProjectCard = ({ text } : { text:string }) => {
    return (
        <div className="w-full h-full grid grid-cols-3">
            <div className="col-span-1">{text}</div>
            <DisplayBoard />
        </div>
    )
}

export default ProjectCard;