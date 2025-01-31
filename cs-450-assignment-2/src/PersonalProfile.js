function PersonalProfile({ props }) {
  return (
    <div
      style={{
        display: "flex",
        padding: "20px",
        justifyContent: "space-between",
        gap: "20px",
      }}
    >
      <div style={{ fontWeight: "bold", fontStyle: "italic", width: "172px" }}>
        {props.title}
      </div>
      <div style={{ width: "640px", marginRight: "24px" }}>
        {props.personalStatement}
      </div>
    </div>
  );
}

export default PersonalProfile;
