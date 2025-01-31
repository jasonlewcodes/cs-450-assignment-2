function WorkExperience({ props }) {
  return (
    <div style={{ display: "flex", padding: "20px", gap: "20px" }}>
      <div style={{ fontWeight: "bold", fontStyle: "italic", width: "172px" }}>
        {props.title}
      </div>
      <div style={{ display: "flex", width: "640px" }}>
        <div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontWeight: "bold", paddingBottom: "8px" }}>
              {props.jobOne}
            </div>
            <div style={{ marginRight: "24px" }}>{props.jobOneDescription}</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontWeight: "bold",
                paddingTop: "32px",
                paddingBottom: "8px",
              }}
            >
              {props.jobTwo}
            </div>
            <div style={{ marginRight: "24px" }}>{props.jobTwoDescription}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
