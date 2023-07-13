import { Link } from "react-router-dom";

const RecipeCard = ({ name, tagline, description }) => {
    return (
        <div className="card text-start mb-3">
            <div className="card-header">
                {tagline}
            </div>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text mb-3">{description}</p>
                <a href="#" className="btn btn-primary">Details</a>
            </div>
        </div>
    );
}

export default RecipeCard;