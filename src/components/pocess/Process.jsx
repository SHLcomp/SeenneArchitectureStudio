import "./Process.scss";
const Process = () => {
  return (
    <div className="process">
      <div className="div-tl">
        <span className="eyebrow">Process</span>
        <h1 className="title">Design Philosophy</h1>
      </div>

      <div className="desc">
        <div className="img">
          <img src="https://images.pexels.com/photos/9052461/pexels-photo-9052461.jpeg" alt="" />
        </div>
        <div className="info">
          <h3><span className="circle"></span>Research</h3>
          <h3><span className="circle"></span>Rough Sketch</h3>
          <h3><span className="circle"></span>Drtailed Sketch</h3>
          <h3><span className="circle"></span>Construction Approval</h3>
        </div>
      </div>

      <div className="text">
        <p>
          The outcome of ongoing research into innovative materials is
          translated into the development of new products with distinctive,
          high-performance characteristics. New functional requirements are
          addressed through the reinterpretation of traditional materials using
          advanced and experimental techniques, such as 3D printing and
          metallization, opening up new possibilities in both form and function.
        </p>
      </div>
      
    </div>
  );
};

export default Process;
