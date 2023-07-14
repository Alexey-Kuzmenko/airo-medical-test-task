import { useNavigate } from "react-router-dom";

export const PageLayout = ({ imgUrl, name, description, firstBrewed, tagline, abv, ph }) => {
    const navigation = useNavigate()

    return (
        <div classNameName="card" style={{ width: "100%", padding: '20px 0px' }}>
            <img src={imgUrl} className="card-img-top mb-3" alt="bottle of beer" style={{ maxWidth: 100 }} />
            <div className="card-body mb-3">
                <h5 className="card-title mb-3">{name}</h5>
                <p className="card-text">{description}</p>
            </div>
            <ul className="list-group list-group-flush mb-3">
                <li className="list-group-item">First brewed: {firstBrewed}</li>
                <li className="list-group-item">Tagline: {tagline}</li>
                <li className="list-group-item">ABV: {abv}</li>
                <li className="list-group-item">P.H: {ph}</li>
            </ul>
            <div className="card-body">
                <button type="button" className="btn btn-primary" onClick={() => navigation(-1)}>Go back</button>
            </div>
        </div>
    );
};