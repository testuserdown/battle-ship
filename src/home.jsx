import { useNavigate } from "react-router-dom";
import { rooms } from "./context/data";
import "./home.css";
import { RiTwitterXFill } from "react-icons/ri";

const ENV = window.__ENV || {};
const title = ENV.TITLE || "Default Title";
const x = ENV.X || "https://x.com";
export const App = () => {
  const navigete = useNavigate();
  const handlePlay = () => {
    navigete("/battle");
  };
  return (
    <div className="w100 df fdc aic home-container">
      <i></i>
      <div className="title">
        <h1>{title}</h1>
      </div>
      <div className="df aic gap-10">
        <button className="button df aic gap-15" onClick={() => window.open(x, "_blank")}>
          Follow Us <RiTwitterXFill />
        </button>
        <button className="button" onClick={handlePlay}>
          Play
        </button>
      </div>

      <div className="df fdc aic gap-10 rooms">
        <h1 className="w100 df aic jcc ">LIVE MATCHES</h1>
        {rooms.map((room) => (
          <div className="w100 df aic jcsb room-card" key={room.id}>
            <div className="df fdc gap-5 room-title">
              <small>Room {room.id}</small>
              <h2>{room.name}</h2>
              <button
                className={`button ${!room.status && "soon"}`}
                onClick={() => {
                  if (room.status) {
                    navigete("/battle");
                  } else {
                    alert("This room is coming soon!");
                  }
                }}
                disabled={!room.status}
              >
                {room.status ? "Join" : "Coming Soon"}
              </button>
            </div>
            <figure className="df fdc">
              <small>Players: 10/20</small>
              <img src={room.image} alt={room.name} />
            </figure>
          </div>
        ))}
        <footer className="footer">
          <p>The Trenches BattleShip © 2023</p>
          <span>
            All rights reserved. This is a fictional game created for
            educational purposes.
          </span>
        </footer>
      </div>
    </div>
  );
};
