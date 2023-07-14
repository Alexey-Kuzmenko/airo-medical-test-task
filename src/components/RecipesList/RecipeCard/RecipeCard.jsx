import { Link } from "react-router-dom";
import cn from 'classnames'

const RecipeCard = ({ id, name, tagline, description, onContextMenuClick, selected }) => {

    return (
        <Link to={`recipe/${id}`} className='text-decoration-none'>
            <div className={cn("card text-start mb-3",
                { 'border border-primary': selected }
            )} onContextMenu={onContextMenuClick}>
                <div className="card-header">
                    {tagline}
                </div>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text mb-3">{description}</p>
                </div>
            </div>
        </Link >
    );
}

export default RecipeCard;