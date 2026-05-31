import Header from"./componants/Header";
import Footer from"./componants/Footer";
import "./App.css"
function App() {
  return (
    <>
    <Header/>
      <div id="firstreact">Mt first react app</div>

      <p className="bg-success">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
        unde rerum consequatur iusto! Distinctio voluptate iure quidem nostrum
        quae voluptas, eum eius quas natus quaerat illo quis beatae temporibus
        optio?
      </p>

      <button>button</button>
      <Footer/>
    </>
  );
}

export default App;
