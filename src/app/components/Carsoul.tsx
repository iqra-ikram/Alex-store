import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src="https://img.lazcdn.com/us/domino/1808d27c-1357-4f23-805b-96ddfeed44c3_PK-1976-688.jpg_2200x2200q80.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="https://img.lazcdn.com/us/domino/ab973f57-afc2-4b1f-bee8-074add5c9386_PK-1976-688.jpg_2200x2200q80.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="https://img.lazcdn.com/us/domino/d7c2fd58-959a-461f-b270-7fc1c0f55575_PK-1976-688.jpg_2200x2200q80.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src="https://img.lazcdn.com/us/domino/b09d8c7e-bc7d-47e9-94b1-11191be96c16_PK-1976-688.jpg_2200x2200q80.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    
    </>
  );
}
