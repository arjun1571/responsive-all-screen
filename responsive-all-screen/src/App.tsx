import "./App.css";
function App() {
  return (
    <>
      <div className="grid  md:grid-cols-2 sm:m-3 xs:m-2 md:m-4 xl:grid-cols-3 xl:gap-4 2xl:grid-cols-4 gap-5 2xl:m-5">
        <div className="bg-green-500 h-40 rounded-xl"></div>
        <div className="bg-blue-500 h-40 rounded-xl"></div>
        <div className="bg-red-500 h-40 rounded-xl"></div>
        <div className="bg-orange-500 h-40 rounded-xl"></div>
      </div>
      <div className="grid  md:grid-cols-2 sm:m-3 xs:m-2 md:m-4 xl:grid-cols-3 xl:gap-4 2xl:grid-cols-4 gap-5 2xl:m-5">
        <div className="bg-green-500 h-40 rounded-xl"></div>
        <div className="bg-blue-500 h-40 rounded-xl"></div>
        <div className="bg-red-500 h-40 rounded-xl"></div>
        <div className="bg-orange-500 h-40 rounded-xl"></div>
      </div>
    </>
  );
}

export default App;
