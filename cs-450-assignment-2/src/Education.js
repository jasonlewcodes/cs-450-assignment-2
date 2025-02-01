function Education({ props }) {
  return (
    <div style={{ display: "flex", padding: "20px", gap: "20px" }}>
      <div style={{ display: "flex" }}>
        <div
          style={{
            fontWeight: "bold",
            fontStyle: "italic",
            width: "172px",
          }}
        >
          {props.title}
        </div>
        <div style={{ display: "flex", width: "640px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <div style={{ fontWeight: "bold" }}>{props.schoolOne}</div>
              <div>{props.degreeOne}</div>
              <div>{props.yearsOne}</div>
              <div>{props.gpaOne}</div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                marginTop: "4px",
              }}
            >
              <div style={{ fontWeight: "bold" }}>{props.schoolTwo}</div>
              <div>{props.degreeTwo}</div>
              <div>{props.yearsTwo}</div>
              <div>{props.gpaTwo}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
