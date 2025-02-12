export default function Card({ card, isFlipped, onClick }) {
  return (
    <div
      className={`h-24 flex items-center justify-center text-4xl cursor-pointer rounded-lg transition-colors duration-300 ${
        isFlipped ? "bg-white" : "bg-blue-500 hover:bg-blue-600"
      }`}
      onClick={onClick}
    >
      {isFlipped ? card.content : ""}
    </div>
  );
}
