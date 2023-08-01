

const Analyticscard = (params:any) => {
  
  return (
    <div className="analyticcard">
      <div className="left">
        <p className="heading">{params.title}</p>
        <p className="data">{params.data}</p>
      </div>
      <div className="right">
        <div className={`circle${params.id}`}>
        </div>
      </div>
    </div>
  );
}

export default Analyticscard