import Card from "./Card";

function CardHolder({ urls, onCardClick }) {
  return (
    <div id="cardHolder">
      {urls.map((url, index) => (
        <Card key={index} imageUrl={url} onClick={() => onCardClick(url)} />
      ))}
    </div>
  );
}

export default CardHolder;
