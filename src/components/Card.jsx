function Card({ imageUrl, onClick }) {
  return (
    <div id="card" onClick={onClick}>
      <div>
        <img src={imageUrl} alt="" />
      </div>
      {/* <div>{"Name"}</div> */}
    </div>
  );
}

export default Card;
