import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    //navigate to home page
    navigate("/home");
  };

  return (
    <>
      <div className="container ">
        <div className="header row align-items-center m-5">
          <div className="col-lg-5">
            <h3>
              Welcome to <span className="text-warning">Media Player</span>
            </h3>
            <p className="mt-3" style={{ textAlign: "justify" }}>
              Media Player App. will allow you to add and remove their uploaded
              videos , also helps to arrange them in different categories by
              providing drag and drop functionalities.
            </p>
            <button onClick={handleNavigate} className="btn btn-info mt-3">
              Get Started
            </button>
          </div>
          <div className="col"></div>
          <div className="col-lg-6">
            <img
              src="https://c.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif"
              alt="Landing Image"
            />
          </div>
        </div>
        <div className="features mb-5">
          <h3 className="text-center">Features</h3>
          <div className="row mt-5">
            <div className="col-lg-4">
              <Card style={{height:'450px',width:'22rem'}}>
                <Card.Img height={'300px'} variant="top" src="https://media3.giphy.com/media/XGbfacwWVO9J34OSBL/source.gif" />
                <Card.Body>
                  <Card.Title>Managing Videos</Card.Title>
                  <Card.Text>
                  User can upload, view and remove the videos
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4">
              <Card style={{height:'450px',width:'22rem'}}>
                <Card.Img height={'300px'} variant="top" src="https://cutewallpaper.org/21/music-equalizer-gif/Music-gif-png-clipart-images-gallery-for-free-download-.gif" />
                <Card.Body>
                  <Card.Title>Categorize Vidoes</Card.Title>
                  <Card.Text>
                  User can categorise the videos according to their prefernces using drag and drop features
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4">
              <Card style={{height:'450px',width:'22rem'}}>
                <Card.Img height={'300px'} variant="top" src="https://media0.giphy.com/media/3o7btZ1pMda4to9zR6/source.gif" />
                <Card.Body>
                  <Card.Title>Watch History</Card.Title>
                  <Card.Text>
                  User are able to see the history of watched videos.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <div className="video row  border p-5 mt-5 rounded mb-5 align-items-center">
        <div className="col-lg-5">
          <h3 className="text-warning">Simple, Fast and Powerful</h3>
          <p style={{textAlign:'justify'}}><span className="fs-4">Play Everything:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, animi perspiciatis! Deleniti maxime .
          </p>
          <p style={{textAlign:'justify'}}><span className="fs-4">Categorize Videos: </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, animi perspiciatis! Deleniti maxime .
          </p>
          <p style={{textAlign:'justify'}}><span className="fs-4">Watch History:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, animi perspiciatis! Deleniti maxime .
          </p>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
        <iframe width="688" height="387" src="https://www.youtube.com/embed/IqwIOlhfCak" title="LEO - Badass Lyric | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default LandingPage;
