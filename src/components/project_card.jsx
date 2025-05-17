import React, { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

function GithubProjectCard({
    repo = "MaddyDev-glitch",
    imgSrc,
    title = "Lorem Ipsum",
    description = "Lorem Ipsum",
    isStar = true
}) {
    const [stars, setStars] = useState(null);

    useEffect(() => {
        fetch(`https://api.github.com/repos/${repo}`)
            .then((res) => res.json())
            .then((data) => setStars(data.stargazers_count))
            .catch(() => setStars(null));
    }, [repo]);

    return (
        <div className="col-md-4">
            <a
                href={`https://github.com/${repo}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
            >
                <div className="work-box shadow-sm rounded-3 border border-light" style={{ transition: "box-shadow 0.2s", cursor: "pointer" }}>
                    <div className="work-img">
                        <img src={imgSrc} alt={title} className="img-fluid rounded-top" style={{ objectFit: "cover", height: 200, width: "100%" }} />
                    </div>
                    <div className="work-content p-3">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <h2 className="w-title h5 mb-0">{title}</h2>
                            <div className="w-like d-flex align-items-center">
                                {/* <CiStar></CiStar> */}
                                {isStar && <FaStar className="golden-star" color="#FFD700" />}
                                {isStar && <span>{stars !== null || stars >= 1 ? stars : "…"}</span>
                                }

                            </div>
                        </div>
                        <div className="w-more text-muted small">
                            {description}
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default GithubProjectCard;
