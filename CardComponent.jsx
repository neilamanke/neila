const CardComponent = (props) => {
    console.log ("props", props);
  return (
    <>
      <img src={props.url} />
      <h4>{props.title}</h4>
      <p>{props.text}</p>
    </>
  );
};
export default CardComponent;


export const OtherCardComponent = ({ url, title, text, buttonText = "Click Me", }) => {
    return(
        <>
        <img src={url}/>
        <h4>{title}</h4>
        <p>{text}</p>
        <button>{buttonText}</button>
        </>
    );
};

export const OneMoreCardComponent = (props) => {
   const { url, title, text } = props;
    return(
        <>
        <img src={url}/>
        <h4>{title}</h4>
        <p>{text}</p>
        </>
    );
};