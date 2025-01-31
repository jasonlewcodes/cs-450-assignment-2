function Skills({ props }) {
  return (
    <div style={{ display: "flex", padding: "20px", gap: "20px" }}>
      <div style={{ fontWeight: "bold", fontStyle: "italic", width: "172px" }}>
        {props.title}
      </div>
      <div style={{ display: "flex", width: "640px", gap: "56px" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{props.skillOne}</div>
          <div>{props.skillTwo}</div>
          <div>{props.skillThree}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{props.skillFour}</div>
          <div>{props.skillFive}</div>
          <div>{props.skillSix}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{props.skillSeven}</div>
          <div>{props.skillEight}</div>
          <div>{props.skillNine}</div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
