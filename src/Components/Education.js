import Button from "./Button";

const Education = (props) => {
  return (
    <>
      <div>Education Section</div>
      <div>{props.educations.univ === "UGM" ? "ugm deh" : "kampus lain"}</div>
      <div>{props.educations.jurusan}</div>
      <Button text={"kirim"} color={"red"} warning />
    </>
  );
};

export default Education;