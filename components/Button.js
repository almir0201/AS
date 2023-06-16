import Link from 'next/link'
function Button(props) {
  return (
    <Link href="/login">
      <div className="button">
        <span className="button-text">{props.text}</span>
      </div>
    </Link>
  );
}

export default Button;
