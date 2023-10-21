import React, { useEffect, useState } from "react";
import axios from "axios";
import { SimpleGrid } from "@chakra-ui/react";

export const Movies = () => {
  const [movieData, setMovieData] = useState(null);

  const [vote, setVote] = useState(0)



  useEffect(() => {
    const parameters = {
      category: "movies",
      language: "kannada",
      genre: "all",
      sort: "voting",
    };

    axios
      .post(`https://hoblist.com/api/movieList`, parameters)
      .then((r) => {
        setMovieData(r.data.result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div>
      <h2 style={{ color: "red" }}>MOVIE LIST</h2>
      <SimpleGrid marginLeft="100px" columns={2} spacing={10} gridGap={"20px"}>
        {movieData?.map((movie) => (
          <div
            style={{
              width: "500px",
            }}
            key={movie._id}
          >
            <div
              style={{
                display: "flex",
                height: "250px",
                width: "500px",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              }}
            >
              <div>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2609/2609203.png"
                  alt="Upvote"
                  height="20%"
                  onClick={() => setVote(vote + 1)}
                />
                <h1>{vote}</h1>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2609/2609201.png"
                  alt="Downvote"
                  height="20%"
                  onClick={() => setVote(vote - 1)}
                />
              </div>

              <div>
                <img src={movie.poster} alt="Movie Poster" height="100%" />
              </div>
              <div style={{ textAlign: "left", marginLeft: "10px" }}>
                <p style={{ fontWeight: "bold" }}>{movie.title}</p>
                <p>Genre : {movie.genre}</p>
                <p>Director : {movie.director[0]}</p>
                <p>Starring : {movie.stars[0]}</p>
                <p style={{ color: "#5ca1df" }}>
                  {movie.pageViews} views | voted by {movie.voting} people
                </p>
              </div>
            </div>

            <button
              style={{
                width: "100%",
                color: "white",
                backgroundColor: "#027bff",
                padding: "5px 0px",
                fontWeight: "bold",
              }}
            >
              Watch Trailer
            </button>
          </div>
        ))}
      </SimpleGrid>
    </div>
  );
};
