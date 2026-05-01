import "./SkeletonLoader.css";

export default function SkeletonLoader() {
  return (
    <div>
      <div className="skeleton" style={{ width: "40%" }}></div>
      <div className="skeleton" style={{ height: "150px", marginTop: 10 }}></div>
    </div>
  );
}