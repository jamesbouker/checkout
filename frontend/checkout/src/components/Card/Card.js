import "./Card.css";

export default function Card(props) {
  return (
    <div style={props.style} className="card">
      {props.children}
    </div>
  );
}
