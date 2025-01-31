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
              <div style={{ fontWeight: "bold" }}>
                New Jersey Institute of Technology
              </div>
              <div>MS in Data Science</div>
              <div>2022 - 2023</div>
              <div>GPA: 4.0</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
