import React, { useEffect, useState } from "react";
import "./Home.scss";
import Row from "./Row";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { BiPlay } from "react-icons/bi";

const apikey = "00b6fe160d54d2d77b76898ec410a6c7";
const url = "https://api.themoviedb.org/3";
const upcoming = "upcoming";
const nowPlaying = "now_playing";
const Popular = "popular";
const topRated = "top_rated";

const imgUrl = "https://image.tmdb.org/t/p/original";

const Home = () => {
  const [upcomingmovies, setUpcomingmovies] = useState([]);
  const [nowplaying, setNowplaying] = useState([]);
  const [popular, setPopular] = useState([]);
  const [toprated, setTopRated] = useState([]);
  const [genre, setGenre] = useState([]);
  useEffect(() => {
    const fetchUpcoming = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${upcoming}?api_key=${apikey}`);
      setUpcomingmovies(results);
    };

    const fetchnowPlaying = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apikey}`);
      setNowplaying(results);
    };

    const fetchPopular = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${Popular}?api_key=${apikey}`);
      setPopular(results);
    };

    const fetchtopRated = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${topRated}?api_key=${apikey}`);
      setTopRated(results);
    };

    const fetchgenre = async () => {
      const {
        data: { genres },
      } = await axios.get(`${url}/genre/movie/list?api_key=${apikey}`);
      setGenre(genres);
    };

    fetchUpcoming();
    fetchnowPlaying();
    fetchPopular();
    fetchtopRated();
    fetchgenre();
  }, []);
  return (
    <div className="home">
      <div
        className="banner"
        style={{
          backgroundImage: popular[0]
            ? `url(${`${imgUrl}/${popular[0].poster_path}`})`
            : "rgb(16,16,16)",
        }}
      >
        {popular[0] && <h1>{popular[0].title}</h1>}
        {popular[0] && <p>{popular[0].overview}</p>}
        <div className="btns">
          <button>
            <BiPlay />
            Play{" "}
          </button>
          <button>
            My List <AiOutlinePlus />
          </button>
        </div>
      </div>

      <Row title={"Upcoming"} arr={upcomingmovies} />
      <Row title={"Now Playing"} arr={nowplaying} />
      <Row title={"Popular"} arr={popular} />
      <Row title={"Top Rated"} arr={toprated} />

      <div className="genre">
        {genre.map((item) => (
          <Link key={item.id} to={`/genre/${item.id}`}>
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
