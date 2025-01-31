function Header({ props }) {
  return (
    <div
      style={{
        height: "172px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        background: "#f2f2f2",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            marginBottom: "48px",
          }}
        >
          <div className="name" style={{ fontWeight: "bold" }}>
            {props.name}
          </div>
          <div>{props.occupation}</div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            marginRight: "24px",
            marginTop: "8px",
          }}
        >
          <div className="personal-info">
            {props.email}
            <a href="mailto:abc@gmail.com">{props.emailAddress}</a>
          </div>
          <div className="personal-info">{props.website}</div>
          <div className="personal-info">{props.phoneNumber}</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
